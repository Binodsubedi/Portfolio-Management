import React from 'react'

const Body = () => {
  return (
    <div className='createBody'>
        <form className='createBody__formContainer'>
        <h1>Create</h1>
            <div className='createBody__formContainer--stockName'>
                <label htmlFor="stockName">Stock-Name:</label>
                <input type="text" id='stockName'  required />
            </div>

            <div className='createBody__formContainer--buyer'>
                <label htmlFor="buyer">Buyer:</label>
                <input type="text" id='buyer' required />
            </div>

            <div className='createBody__formContainer--quantity'>
                <label htmlFor="quantity">Quantity:</label>
                <input type="text" id='quantity' required />
            </div>

            <div className='createBody__formContainer--totalCost'>
                <label htmlFor="totalCost">Total Price:</label>
                <input type="text" id='totalCost' required />
            </div>

            <button type='submit'>Create</button>

        </form>
    </div>
  )
}

export default Body