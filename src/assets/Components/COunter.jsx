import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../../counterSlice'



function COunter() {
    const[amount,setAmount]= useState(0)
    const dispatch= useDispatch()
    const count= useSelector(state=>state.counterReducer.count)
    const handleIncrementByAmount=()=>{
        if(amount){
            dispatch(incrementByAmount(amount))
        }
        else{
            alert("Enter a valid amount")
        }
    }
  return (
    <div className='container bg-black  border' style={{width:"400px",borderRadius:"30px"}}>
        <h1 className=' mb-3 text-center mt-5 text-white' 
        style={{fontSize:"9vh",textShadow:"0 0 5px white, 0 0 15px orange,0 0 20px red,0 0 40PX orange"}}>{count}</h1>
    
            <div  >
                <button onClick={()=>dispatch(increment())} className='btn-1 m-3 mt-3  btn btn-success border'>Increment</button>
                <button onClick={()=>dispatch(decrement())} className='btn-2 m-3 mt-3 btn btn-danger border'  >Decrement</button>
                <button onClick={()=>dispatch(reset())} className='btn-3 m-3 mt-3 btn btn-warning px-3 border' >Reset</button>
            </div>
            <div className='d-flex justify-content-between'>
                <input onChange={e=>setAmount(e.target.value)} type='text' placeholder='Enter amount to be incremented !' className=' container w-75 mb-4  ' style={{borderRadius:"5px"}}></input>
                <button onClick={handleIncrementByAmount} className='btn btn-outline-secondary mb-4 me-3'>Add</button>
            </div>
    
                
    </div>
  )
}

export default COunter