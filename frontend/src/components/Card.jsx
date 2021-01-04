const getButtons = (id, toBasket, incrAmount, decrAmount) =>
    toBasket ?
        (
            <button className="btn btn-primary" onClick={() => toBasket(id)}>To basket</button>
        )
        :
        (
            <>
                <button className="btn btn-primary">Increase</button>
                <button className="btn btn-primary">Decrease</button>
            </>
        )




export default function (props) {
    const {id, incrAmount, decrAmount, toBasket, title, description} = props
    return (
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""/></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a href="#">{title}</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                    {/*<small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>*/}
                    {getButtons(id, toBasket, incrAmount, decrAmount)}
                </div>
            </div>
        </div>
    )
}
