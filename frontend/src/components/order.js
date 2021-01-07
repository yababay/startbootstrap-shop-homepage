import axios from 'axios';

export default async function(basket) {
    if(!basket || !basket.length){
        alert('The basket is empty.')
        return false
    }
    console.log(basket)
    const inputs = document.querySelectorAll('form input')
    const data = {}
    for(const input of Array.from(inputs)) {
        if(!input.value || !input.value.trim()){
            alert('Please fullfill inputs correctly.')
            return false
        }
        data[input.name] = input.value
    }
    try{
      data.totalPrice = basket.reduce((acc, el) => acc + el.qnty * el.price, 0)  
      const reply = await axios({
          method: 'post',
          url: 'http://localhost:4040/orders/id',
          data
      })
      const {id} = reply.data
      await axios({
          method: 'post',
          url: 'http://localhost:4040/orders/lines',
          data: {id, basket}
      })
      return true
    }
    catch(err){
        console.log(err)
        alert('Something went wrong...')
        return false
    }
}
