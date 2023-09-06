import { GET_CATEGORY,GET_ALL_PRODUCT,ADD_TOCARD,DELETE_TO_CARD,SEARCH_DATA,PRODUCTS_DATA } from "./Types";

export const ProductReducer=(state, action)=>{
    switch(action.type){
        case GET_CATEGORY:{
            return {
                ...state,
                categories:action.payload
            }
        }
        case GET_ALL_PRODUCT:{
            return{
                ...state,
                products:action.payload
            }
        }

        case ADD_TOCARD:{
            const {id}=action
            const {cart,products}=state
            const element=products.find((elem)=>elem.id===id)
            const newArr=[...cart,element]
            return {
                ...state,
                cart:newArr
            }
        };


        case DELETE_TO_CARD:{
            const {id}=action
            const {cart}=state
            const newArr=cart.filter((elem,i)=>i!==id)
            return {
                ...state,
                cart:newArr
            }
        }
        case SEARCH_DATA:{
            const {text}=action
            const {products}=state
            const newArr=products.filter((elem)=>{
                return elem.title.toLowerCase().indexOf(text.toLowerCase())>-1
            })
            return{
                ...state,
                products:newArr
            }
        }

        case PRODUCTS_DATA:{
            return {
                ...state,
                data:action.payload
            }
        }
        default:
            return state
    }
}