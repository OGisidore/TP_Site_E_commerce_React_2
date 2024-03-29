import { sonnorEffect } from "../../Helpers/utiles";
import { Article } from "../../models/Article";
import { getItem, setItem } from "../../services/localstorage.services";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";
import { CartAction, CartGlobalState } from "../actions/types";

const cart = getItem('cart')
const initCart: CartGlobalState = cart ? cart : {
    items: [],
    quantity: 0,
    sub_total: 0
}

export const cartReducers = (state: CartGlobalState = initCart, action: CartAction = { type: null, payload: null },) => {
    switch (action?.type) {
        case ADD_TO_CART:
            sonnorEffect('success')
            const { payload } = action
            if (payload) {
                const existingItem = state.items.find((item) => item.product._id === payload.product._id)
                if (existingItem) {
                    existingItem.quantity += payload.quantity
                    existingItem.sub_total = existingItem.product.solde_price * existingItem.quantity

                    state.quantity += payload.quantity
                } else {
                    const newItem: Article = {
                        product: payload.product,
                        quantity: payload.quantity,
                        sub_total: payload.product.solde_price * payload.quantity
                    }
                    state.items.push(newItem)
                    state.quantity += payload.quantity
                }
                state.sub_total = state.items.reduce((total, item) => total + item.sub_total, 0)

            }
            setItem('cart', state)


            return {...state}

            break;
        case REMOVE_FROM_CART:
            sonnorEffect('change')
            if (action?.payload) {
                
                
                const index = state.items.findIndex((existing) => existing.product._id == action.payload?.product._id)
               
                
                if (index !== -1) {
                   
                    

                    state.items[index].quantity -= action.payload.quantity
                    state.items[index].sub_total -= action.payload.quantity * action.payload.product.solde_price
                    if (state.items[index].quantity <= 0) {
                       
                        
                        state.items.splice(index, 1)

                    }
                    state.quantity = state.items.reduce((quantity, item) => quantity + item.quantity, 0)
                    state.sub_total = state.items.reduce((total, item) => total + item.sub_total, 0)
                   
                    
                }

            }
            setItem('cart', state)

            return {...state}

            break;

        default:
            return {...state}
            break;
    }
}
