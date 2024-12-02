import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard";
import Income from "./Income";
import Expenses from "./Expenses";
import Transactions from "./Transactions";
import Savings from "./Savings";

function Navbar() {
  return (
    <div>
      <div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-evenly",
            fontSize: "20px",
            backgroundColor: "lightblue",
            color: "white",
            padding: "15px",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/income">Income</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
          <li>
            <Link to="/transactions">Transactions</Link>
          </li>
          <li>
            <Link to="/savings">Savings</Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/savings" element={<Savings />} />
        </Routes>
      </div>
    </div>
  );
}

export default Navbar;
