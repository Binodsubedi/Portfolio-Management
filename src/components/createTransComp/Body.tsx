import axios from 'axios';
import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { getStocks, LoginStruc} from '../../actions'
import { StoreState } from '../../reducers';


interface PropsIn{
    loggedinUser:LoginStruc;
    getStocks:any;
}

const Body = (props:PropsIn) => {

const stockName = useRef<HTMLInputElement>(null);
const boughtQuantity = useRef<HTMLInputElement>(null);
const totalCostPrice = useRef<HTMLInputElement>(null);


const createSubmit = async (e:any)=>{

    e.preventDefault();

    const reqBody = {
        stockName : stockName.current?.value,
        boughtQuantity: boughtQuantity.current?.value,
        Buyer: props.loggedinUser.data,
        totalCostPrice : totalCostPrice.current?.value
    } 

    const resp = await axios.post('http://localhost:3000/api/v1/stocks/createTransaction',reqBody);

    if(resp.data.status === 'success'){
        alert('New Transaction created');
        props.getStocks(props.loggedinUser.data);
    }




}


  return (
    <div className='createBody'>
        <form className='createBody__formContainer' onSubmit={e=>createSubmit(e)}>
        <h1>Create</h1>
            <div className='createBody__formContainer--stockName'>
                <label htmlFor="stockName">Stock-Name:</label>
                <input type="text" id='stockName' ref={stockName}  required />
            </div>

            {/* <div className='createBody__formContainer--buyer'>
                <label htmlFor="buyer">Buyer:</label>
                <input type="text" id='buyer' required />
            </div> */}

            <div className='createBody__formContainer--quantity'>
                <label htmlFor="quantity">Quantity:</label>
                <input type="text" id='quantity' ref={boughtQuantity} required />
            </div>

            <div className='createBody__formContainer--totalCost'>
                <label htmlFor="totalCost">Total Price:</label>
                <input type="text" id='totalCost' ref={totalCostPrice} required />
            </div>

            <button type='submit'>Create</button>

        </form>
    </div>
  )
}

const mapStateToProps = (state:StoreState):{loggedinUser:LoginStruc}=>{
    return {
        loggedinUser: state.loggedinUser
    }
}

export default connect(mapStateToProps,{getStocks})(Body);