import { connect } from 'react-redux';
import { incrAmount, decrAmount } from '../actions';
import Card from './Card';

function FulfillBasket ({basket, incrAmount, decrAmount}) {
  return (
    <>  
        <h2>The Basket</h2>      
        <div className="row">
          {basket.map(card => {
            return (
              <Card {...card} key={card.id} incrAmount={incrAmount} decrAmount={decrAmount} />
            );
          })}
        </div>
    </>
  );
}

const mapStateToProps = state => {
    return {basket: state.basket};
};

const mapDispatchToProps = dispatch => {
  return {
    incrAmount: id => {
      alert('incr')
      dispatch(incrAmount(id));
    },
    decrAmount: id => {
      alert('decr')
      dispatch(decrAmount(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FulfillBasket);

