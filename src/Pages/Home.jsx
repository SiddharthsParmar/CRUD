import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {

const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/product")
        .then((res)=>{
            setData(res.data);
            console.log(data);
            
        }
        )
      
    },[])


    const handlDelete=(id)=>{
        const confirm = window.confirm("do you like to dlet product??")
if(confirm)
        {axios.delete(`http://localhost:3000/product/${id}`).then((res)=>location.reload())
            




        }
    }





  return (
   <>
     <div>
     <div className='add' style={{display:'flex' , alignItems:'center' , justifyContent:'flex-end' ,marginBottom:'25px', marginRight:'25px'}}>
     <Link to='/create'><button style={{background:'#F2D5CE'}}> Create + </button>  </Link>
     </div>
        <div style={{display:'flex',gap:'17rem',padding:'2px',marginRight:'30px'}}><h2>id</h2> <h2>name</h2> <h2>price</h2> <h2>discount</h2></div>
{data.map((i)=>{
    return(
        <>
        <div className='left' style={{background:'#C0C78C',color:'#FEFAE0   ',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px'}}>
        <h3>{i.id}</h3>
        <h3>{i.name}</h3>
        <h3>{i.price}</h3>
        <h3>{i.discount}</h3>
<div className='right' style={{display:'flex' , gap:'5px',background:'white',padding:'20px'}}>
<Link to={`/read/${i.id}`}><button style={{background:'#9CD3D9'}}>Read</button></Link>
<Link to={`/update/${i.id}`}><button style={{background:'#E9F2A2'}}>Update</button></Link>
<button style={{background:'#F2D5CE'}} onClick={()=>handlDelete(i.id)}>Delete</button>
</div>
        </div>
        </>

    )
})}
      
    </div>
   </>
  )
}

export default Home
