import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        itemList: [],
        totalQty: 0,
        showCart: false
    },
    reducers : {
       addToCart(state,action){
        const newItem = action.payload
        // cek of available
        const existingItem = state.itemList.find( (item) => item.id === newItem.id );
        console.log('cek',existingItem)
        if (existingItem){
            existingItem.qty++;
            existingItem.price += newItem.price
            state.totalQty++;
        } else {
            state.itemList.push({
                id : newItem.id,
                price : newItem.price,
                qty : 1,
                totalPrice : newItem.price,
                name : newItem.name
            })
            state.totalQty++;
        }
       },
       removeFromCart(state,action){
        const id = action.payload
        const existingItem = state.itemList.find( (item) => item.id === id );
        if (existingItem.qty === 1 ){
            state.itemList = state.itemList.filter(item=>item.id !== id)
        } else {
            existingItem.qty--;
        }
        state.totalQty--;
       },
       setShowCart(state){
        state.showCart = true
       },
    }
})

export const cartActions = cartSlice.actions

export default cartSlice;
