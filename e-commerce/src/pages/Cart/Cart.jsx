import React, { useEffect, useState } from 'react'
import "./Cart.scss"
import Navbar from '../../components/Navbar/Navbar'
import Announcement from '../../components/Announcement/Announcement'
import Footer from '../../Footer/Footer'
// import axios from "axios"
import StripeCheckout from "react-stripe-checkout";
import { Add, Remove } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { userRequest } from '../../requestMethods'
import { useNavigate } from 'react-router'
// import { useHistory } from "react-router";

const Cart = () => {
const cart = useSelector((state)=>state.cart)
const [stripeToken,setStripeToken] = useState(null);

const navigate = useNavigate();

const onToken=(token)=>{
    setStripeToken(token);
}

useEffect(()=>{
    console.log("Updated stripeToken:", stripeToken);
    const makeRequest = async () => {
        try{
            // console.log("hiiiiii")
            const res = await userRequest.post("http://localhost:5000/api/checkout/payment/",{
                tokenId: stripeToken.id,
                amount: 500,
            })
            // console.log("hellooo")
            navigate("./Success/Success.jsx", {
                stripeData: res.data,
              });

        }catch(error){
            console.error("Error making payment request:", error);
        }
    }
    stripeToken && makeRequest();
},[stripeToken,navigate])

// const Message = ({ message }) => (
//     <section>
//       <p>{message}</p>
//     </section>
//   );
//   export default function App() {
//     const [message, setMessage] = useState("");
  
//     useEffect(() => {
//       // Check to see if this is a redirect back from Checkout
//       const query = new URLSearchParams(window.location.search);
  
//       if (query.get("success")) {
//         setMessage("Order placed! You will receive an email confirmation.");
//       }
  
//       if (query.get("canceled")) {
//         setMessage(
//           "Order canceled -- continue to shop around and checkout when you're ready."
//         );
//       }
//     }, []);
  
//     return message ? (
//       <Message message={message} />
//     ) : (
//       <Navbar />
//     );
//   }

const KEY = "pk_test_51Og2DhSBnGhSHA9CN8zMkumeRKhy5NGMVHBBrxnjpXJO9snIigP9BuVCz0vsnFteY2uUK4Yc5WudjvS8IsfwAnLm000HVcaPnc";


  return (
    <div className='Cart'>
        <Navbar />
        <Announcement />
        <div className='Wrapper'>
            <h1 className='Title'>YOUR BAG</h1>
            <div className='Top'>
                <button>CONTINUE SHOPPING</button>
                <div className='TopTexts'>
                    <span>Shopping Bag(2)</span>
                    <span>Your Wishlist (0)</span>

                </div>
                <button className='filledbutton'> CHECKOUT NOW</button>

            </div>
            <div className='Bottom'>
                <div className='Info'>
                    {cart.products.map((product)=>( <div className='Product'>
                        <div className='ProductDetail'>
                            <img src={product.img} alt=''></img>
                            <div className='Details'>
                                <span className='ProductName'>
                                    <b>Product:</b> {product.title}
                                </span>
                                <span className='ProductID'>
                                    <b>ID:</b> {product._id}
                                </span>
                                <div className='ProductColor' style={{backgroundColor:product.color}}></div>
                                <span className='ProductSize'>
                                    <b>Size:</b> {product.size}
                                </span>

                            </div>
                        </div>
                        <div className='PriceDetail'>
                            <div className='ProductAmountContainer'>
                                <Add />
                                <div className='ProductAmount'
                                >{product.quantityofaproduct}</div>
                                <Remove />
                            </div>
                            <div className='ProductPrice'>$ {product.price*product.quantityofaproduct}</div>
                        </div>
                    </div>))}
                    <hr />
                    

                </div>
                <div className='Summary'>
                    <h1>ORDER SUMMARY</h1>
                    <div  className='SummaryItem'>
                        <span>Subtotal</span>
                        <span>$ {cart.total}</span>
                    </div>
                    <div  className='SummaryItem'>
                        <span>Estimated Shipping</span>
                        <span>$ 5</span>
                    </div>
                    <div  className='SummaryItem'>
                        <span>Shipping Discount</span>
                        <span>$ -5</span>
                    </div>
                    <div  className='Total'>
                        <span>Total</span>
                        <span>$ {cart.total}</span>
                    </div>
                    {/* <button>CHECKOUT NOW</button> */}
                    <StripeCheckout
                        name="SARA."
                        image="https://avatars.githubusercontent.com/u/1486366?v=4"
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                    </StripeCheckout>
                    {/* <form action="http://localhost:5000/api/checkout/payment/" method="POST">
                        <button type="submit">
                            Checkout
                        </button>
                    </form> */}


                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart