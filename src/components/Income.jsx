import React, { useEffect, useState } from "react";
import axios from "axios"


let arrData = [];

function Income() {
  const [value, setValue] = useState("");
  const [income, setIncome] = useState({
    amount: "",
    description: "",
    date: "",
  });

  function handleChange(e) {
    console.log(e.target.value);
    // setValue(...income, {[key]:value})
  }

  function handleClick(e) {
    e.preventDefault();
    
  }

  async function getData() {
    let res = await axios.get(`https://evaluation-6ae98-default-rtdb.asia-southeast1.firebasedatabase.app/income.json`)
    // console.log(res.data);
    arrData = Object.entries(res.data);
    console.log(arrData);
    
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid black",
          padding: "15px",
          width: "25%",
        }}
      >
        <form>
          <input
            type="text"
            placeholder="Enter amount"
            name="amount"
            value={income.amount}
            // value={value}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter description"
            name="description"
            // value={income.description}
            value={value}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="date"
            name="date"
            // value={income.date}
            value={value}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit" onClick={handleClick}>
            {" "}
            Add{" "}
          </button>
        </form>
      </div>

      <div>
        {
            arrData.map(([key,value])=>(
                <h1>{key.amount}:{value.amount}</h1>
                
            ))
        }
      </div>
    </div>
  );
}

export default Income;
