import react from "react";

function Products(props)
{
    function addCart()
    {
        alert("Item Added To Cart 🛒")
    }
    function buyNow()
    {
        alert("Proceed to Checkout Page 🛍️")
    }
    return(<div className="card" style={{ backgroundColor: "transparent" }}>
    <div className="cardItem"><img src={props.image} /></div>

    <div className="cardItem"><h3>Title : </h3><h4>{props.title}</h4></div>

    <div className="cardItem"><h3>Price : </h3> <h4> Rs {props.price}</h4></div>

<div className="cardItem"><h3>Category : </h3>{props.category}</div>

    <div className="cardItem"><h3>Description : </h3> {props.description}</div>

<div className="cardItem"><h3>Ratings : </h3> {props.rating}⭐</div>
<div className="cardItem"><h3>Purchases : </h3>{props.count}</div>
<span><button onClick={buyNow}>Buy Now</button><button onClick={addCart}>Add to Cart</button></span>
</div>)
}
export default Products