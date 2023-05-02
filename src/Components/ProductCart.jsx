export default function ProductCard({Product}) {return(
    <div>
        <img src={Product.image} alt="" loading="lazy"/>
        <h3>{Product.title.split(' ').slice(0,2).join(' ')} </h3>
        <p>{Product.price}</p>
        <div>
            <a>Details</a>
            <div>
                <button>Add To Cart</button>
            </div>
        </div>

    </div>
)}