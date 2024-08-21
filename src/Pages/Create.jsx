import React, { useState } from 'react'
import './Global.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
    const navigate = useNavigate();

const [values, setValues] = useState({
    name:'',
    price:'',
    discount:''

});
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/product',values).then((res)=>{
        console.log(res);
        navigate('/')

        
    })
}


  return (
        <div className='' style={{width:'50vw',marginLeft:'25%'}}>
        <h1 style={{textAlign:'center' ,fontFamily:'monospace' ,background:'#A6B37D',color:'#FEFAE0'}}>create Product</h1>
    <form  onSubmit={handleSubmit}>
    
      <div className="wrap-input-14">
  <input className="input" type="text" placeholder="Name" onChange={e=>setValues({...values , name: e.target.value})}  required/>
    <span className="focus-bg"></span>
</div>
<div className="wrap-input-14">
  <input className="input" type="text" placeholder="price" onChange={e=>setValues({...values , price: e.target.value})} required/>
    <span className="focus-bg"></span>
</div>

<div className="wrap-input-14">
  <input className="input" type="text" placeholder="discount" onChange={e=>setValues({...values , discount: e.target.value})} required/>
    <span className="focus-bg"></span>
</div>
  
  <button type='submit' style={{background:'#9CD3D9',padding:'20px'}}>Submit</button>
</form>




    </div>
  )
}

export default Create
