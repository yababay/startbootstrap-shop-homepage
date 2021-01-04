import { connect } from 'react-redux';
import { initShowcase, toBasket } from '../actions';
import Card from './Card';

function FulfillShowcase ({store, toBasket}) {
  return (
    <>  
        <h2>The Showcase</h2>      
        <div className="row">
          {store.map(card => {
            return (
              <Card {...card} key={card.id} toBasket={toBasket}/>
            );
          })}
        </div>
    </>
  );
}

const mapStateToProps = state => {
    return {store: state.store};
};

const mapDispatchToProps = dispatch => {
  fetch('products.json')
    .then(res => res.json())
    .then(arr => dispatch(initShowcase(arr)))  
  return {
    toBasket: id => {
      dispatch(toBasket(id));
      alert('The item is added into the basket.')
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FulfillShowcase);

