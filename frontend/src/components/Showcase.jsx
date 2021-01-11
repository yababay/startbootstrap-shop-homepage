import { connect } from 'react-redux';
import axios from 'axios';
import { createStore, addToBasket } from '../store/actions';
import Card from './Card';

function mapState ({showcase, addToBasket}) {
  return (
    <>  
        <h2>The Showcase</h2>      
        <div className="row">
          {
              showcase.map(card => {
                const props = {...card, key: card.id, addToBasket}
                return <Card {...props} />
              })
          }
        </div>
    </>
  );
}

const mapStateToProps = state => {
    return {showcase: state.showcase};
};

const mapDispatchToProps = dispatch => {
    axios({
        method: 'GET',
        //url: 'http://localhost:4040/products'
        url: 'products.json'
    })
    .then(obj => {
        //debugger
        //dispatch(createStore(obj.data.data))
        dispatch(createStore(obj.data))
    })  
    return {addToBasket: id => dispatch(addToBasket(id))}
};

export default connect(mapStateToProps, mapDispatchToProps)(mapState)

