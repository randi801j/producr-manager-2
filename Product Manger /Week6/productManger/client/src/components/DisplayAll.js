import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const DisplayAll =(props)=>{

    const {productlist,setProductlist}= props;
    useEffect(()=>{
        axios.get("http://localhost:8001/api/products")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setProductlist(res.data);
            })
            .catch ((err)=>console.log(err))
    },[])


    return(
        <div>
            <header>
                All Product:
            </header>
            {
                productlist.map((product,index)=>(
                    <div key={product._id}>
                        <Link to ={`/product/${product._id}`}>{product.title}</Link>
                    </div>
                ))
            }
        </div>
    )
}
export default DisplayAll;