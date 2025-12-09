import React from "react";

export default function CartPage({ cart, onRemoveAll, onRemove }) {
  return (
    <div className="container my-4">
      <h3>Your Cart</h3>

      {cart.length === 0 && <h5 className="text-danger">Cart is Empty</h5>}

      {cart.map((item) => (
        <div key={item.id} className="d-flex align-items-center border rounded p-2 mt-2">
          <img src={item.img} width="60" alt="pic" />
          <div className="ms-3">
            <h6>{item.title}</h6>
            <p>₹ {item.price}</p>
          </div>
          <button className="btn btn-danger btn-sm ms-auto" onClick={() => onRemove(item.id)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <button className="btn btn-warning mt-3" onClick={onRemoveAll}>Empty Cart</button>
      )}
    </div>
  );
}

