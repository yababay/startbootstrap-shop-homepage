import { connect } from 'react-redux';

function mapState ({basket}) {
    const total = basket.reduce((acc, el)=> acc + el.qnty * el.price, 0)
    return (
        <>
            <table className="table">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {basket.map(card => {
                    const {qnty, title, price} = card
                    return (
                        <tr>
                            <td>{qnty}x</td>
                            <td>{title}</td>
                            <td>{price * qnty}</td>
                        </tr>
                    )
                  })}
                <tr>
                    <td colspan="2"><b>Total:</b></td>
                    <td>{total}</td>
                </tr>
                </tbody>
            </table>
        </>
    );
}

const mapStateToProps = state => {
    return {
        basket: state.basket
    };
};

export default connect(
  mapStateToProps
)(mapState);
