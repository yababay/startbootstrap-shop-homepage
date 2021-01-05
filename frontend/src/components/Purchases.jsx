import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../store/actions';
import Card from './Card';

function mapState ({basket, increaseQuantity, decreaseQuantity}) {
  return (
    <div className="row">
      {basket.map(card => {
        const props = {...card, key: card.id, increaseQuantity, decreaseQuantity}
        return <Card {...props} />
      })}
    </div>
  );
}

const mapStateToProps = state => {
    return {basket: state.basket};
};

const mapDispatchToProps = dispatch => {
  return {
    increaseQuantity: id => {
      dispatch(increaseQuantity(id));
    },
    decreaseQuantity: id => {
      dispatch(decreaseQuantity(id));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mapState);
