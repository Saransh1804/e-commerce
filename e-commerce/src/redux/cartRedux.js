import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            // this is cart quantity...means no. of different items in cart
            state.quantity+=1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantityofaproduct;
        }
    }

});

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer