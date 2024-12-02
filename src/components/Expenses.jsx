import React, { useState } from 'react'

function Expenses() {

    const [expenses, setExpenses] = useState({amount:"", description:"", category:"", date:""})


    function handleClick(e){
        e.preventDefault();
        
    }

  return (
    <div>
      <div>
        <form action="">
            <input type="text" placeholder='Enter amount' onChange={(e)=>(e.target.value)} />
            <input type="text" placeholder='Enter description' onChange={(e)=>(e.target.value)} />
            <input type="text" placeholder='Enter category' onChange={(e)=>(e.target.value)} />
            <input type="date" onChange={(e)=>(e.target.value)} />
            <button type='submit' onClick={handleClick}>Add</button>
        </form>
      </div>
    </div>
  )
}

export default Expenses
