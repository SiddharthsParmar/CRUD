import React, { useEffect, useState } from 'react'
import './Global.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Update() {
  //this sets data to inputs as value for initial look
const [data, setData] = useState([]);
const {id} = useParams();
//now to store updated value


const [values, setValues] = useState({
  name:'',
  price:'',
  discount:''

});
useEffect(()=>{
  axios.get(`http://localhost:3000/product/${id}`).then((res)=>setData(res.data))
},[])

//to update values
const handleUpdate = (e)=>{
  e.preventDefault();
  axios.put(`http://localhost:3000/product/${id}`,values).then((res)=>setValues(res.data)
  )
}


  return (
    
        <div className='' style={{width:'50vw',marginLeft:'25%'}}>
        <h1>Update the product</h1>
        <form onSubmit={handleUpdate}>
        
          <div className="wrap-input-14">
      <input className="input" type="text" placeholder="Name" value={values.name} onChange={(e)=>setValues({...values,name:e.target.value})}/>
        <span className="focus-bg"></span>
    </div>
    <div className="wrap-input-14">
      <input className="input" type="text" placeholder="price" value={values.price} onChange={e=>setValues({...values , price:e.target.value})} />
        <span className="focus-bg"></span>
    </div>
    
    <div className="wrap-input-14">
      <input className="input" type="text" placeholder="discount"  value={values.discount} onChange={(e)=>setValues({...values , discount : e.target.value})}/>
        <span className="focus-bg"></span>
    </div>
      
      <button type='submit' style={{background:'#9CD3D9',padding:'20px'}}>Submit</button>
    </form>
    
    
    
    
        </div>
      )
  
}

export default Update
