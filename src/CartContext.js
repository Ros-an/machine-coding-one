import { createContext, useReducer, useContext } from "react";

export const CartContext = createContext();



const reducer = (state, action)=> {
    const {payload, type} = action;
    if(type === "ADD_ITEM_TO_CART"){
        const prod = {...payload, quantity: 1}
        return {
            ...state,
            cart:[...state.cart, prod]
        }
    }
    if(type === "SAVE_FOR_LATER"){
        const newCart = state.cart.filter(item => item.id !== payload.id)
        return {
            ...state,
            cart: newCart,
            saveForLater: [...state.saveForLater, payload]
        }
    }
    if(type === "INCREASE"){
        const newCart = state.cart.map(item => item.id === payload? {...item, quantity:item.quantity+1} : item);
        return{
            ...state,
            cart: newCart
        }
    }
    if(type === "DECREASE"){
        const newCart = state.cart.map(item => item.id === payload? {...item, quantity:item.quantity-1} : item);
        return{
            ...state,
            cart: newCart
        }
    }
    if(type === "REMOVE_FROM_CART"){
        const newCart = state.cart.filter(item=> item.id !== payload);
        return{
            ...state,
            cart: newCart
        }
    }
    if(type === "REMOVE_FROM_SAVE"){
        const newSave = state.saveForLater.filter(item=> item.id !== payload);
        return{
            ...state,
            saveForLater: newSave
        }
    }
    return state;
}
const initialState = {
    cart: [],
    saveForLater: []
}
export const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
    <CartContext.Provider value={{...state, dispatch}}>
        {children}
    </CartContext.Provider >
    )
}

export const useCartContext = () => {
    return useContext(CartContext);
}