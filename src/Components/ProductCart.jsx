import { Link } from "react-router-dom";

export default function ProductCard({Product}) {
  return(
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all">
    <figure className="px-10 pt-10">
      <img src={Product.image} alt="Shoes" className="rounded-xl aspect-square " />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{Product.title.split(' ').slice(0,1).join(' ')}</h2>
      <p>{Product.title.split(' ').slice(0,3).join(' ')}</p>
      <div className="card-actions">
        <button className="btn btn-primary">    <Link to={`/product/${Product.id}`}>Details</Link></button>
      </div>
    </div>
  </div>
)}