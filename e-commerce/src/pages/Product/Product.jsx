import React, { useEffect, useState } from 'react'
import "./Product.scss"
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../Footer/Footer'
import { Add, Remove } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../requestMethods'
import { addProduct } from '../../redux/cartRedux'
import { useDispatch } from 'react-redux';

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];

    const [product,setProduct] = useState({});
    const [quantityofaproduct,setQuantity] = useState(1);
    const [color,setColor] = useState("NULL");
    const [size,setSize] = useState("NULL");

    

    useEffect(()=>{
        const getProduct = async ()=>{
            try{
                const res =await publicRequest.get("/products/find/"+id)
                // console.log(res.data.color)
                setProduct(res.data)
            }catch{}
        };
        getProduct()
        
    },[id])

    const dispatch = useDispatch();
    const handleClick=()=>{
        // update cart
        dispatch(addProduct({...product,quantityofaproduct,color,size}));
    }

    const handleQuantity = (type)=>{
        if(type === "dec" ){
            quantityofaproduct>1 && setQuantity(quantityofaproduct-1);
        }else{
            setQuantity(quantityofaproduct+1);
        }
    }
  return (
    <div className='Product1'>
        <Navbar />
        <Announcement />
        <div className='Wrapper1'>
            <div className='ImgContainer'>
                <img src={product.img} alt=''></img>
            </div>
            <div className='InfoContainer'>
                <h1>{product.title}</h1>
                <p> {product.desc}</p>
            <span>{product.price} `$</span>
            <div className='FilterContainer'>
                <div className='Filter'>
                <span className='FilterTitle'>Color</span>
                {product.color && product.color.map((c)=>(
                    <div className='FilterColor' key={c} style={{backgroundColor:c}} onClick={()=>setColor(c)} ></div>
                ))}
                
                </div>
                <div className='Filter'>
                <span className='FilterTitle'>Size</span>
                    <select className='FilterSize' onChange={(e)=>setSize(e.target.value)}>
                    {
                        product.size && product.size.map((s)=>(
                            <option key={s} >{s}</option>
                        ))
                    }
                        
                       
                    </select>
                </div>
                </div>
                <div className='AddContainer'>
                    <div className='AmountContainer'>
                        <Remove onClick={()=>handleQuantity("dec")} />
                        <span>{quantityofaproduct}</span>
                        <Add onClick={()=>handleQuantity("inc")}/>
                    </div>
                    <button onClick={handleClick}>ADD TO CART</button>
                </div>

           
            </div>
        </div>
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default Product