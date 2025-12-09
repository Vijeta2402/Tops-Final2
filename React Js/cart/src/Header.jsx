import React from "react";
import { Link } from "react-router-dom";

export default function Header({ cart, onRemoveAll, onRemove }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">MyShop</Link>

      <ul className="navbar-nav ms-auto">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown">
            🛒 Cart ({cart.length})
          </Link>

          <ul className="dropdown-menu dropdown-menu-end p-2" style={{ width: "300px", maxHeight: "300px", overflowY: "scroll" }}>
            {cart.length === 0 && <p className="text-center">Cart is empty</p>}

            {cart.map((item) => (
              <li key={item.id} className="dropdown-item d-flex justify-content-between align-items-center">
                <img src={item.img} alt="" width="40" /> 
                <span>{item.title}</span>
                <button className="btn btn-sm btn-danger" onClick={() => onRemove(item.id)}>X</button>
              </li>
            ))}

            {cart.length > 0 && (
              <>
                <li><hr /></li>
                <li className="dropdown-item text-center">
                  <button className="btn btn-warning btn-sm" onClick={onRemoveAll}>Empty Cart</button>
                </li>
              </>
            )}
          </ul>
        </li>

        <li className="nav-item ms-3">
          <Link to="/cart" className="btn btn-light btn-sm">Go to Cart Page</Link>
        </li>
      </ul>
    </nav>
  );
}
