import React from "react";
import products from "./productsData";

export default function Content({ onAdd }) {
  return (
    <div className="container my-4">
      <h3>Products</h3>
      <div className="row">

        {products.map((p) => (
          <div className="col-md-3 mt-3" key={p.id}>
            <div className="card">
              <img src={p.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5>{p.title}</h5>
                <p>₹ {p.price}</p>
                <button className="btn btn-primary w-100" onClick={() => onAdd(p)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

