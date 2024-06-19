import { FAILURE_BAG, FAILURE_WISHLIST, REQUEST_BAG, REQUEST_WISHLIST, SUCCESS_BAG, SUCCESS_WISHLIST } from "./actionType"

const initial={
    data:[],
    isLoading:false,
    isError:false
}

export const wishReducer=(state=initial,action)=>{
    switch(action.type){
        case SUCCESS_WISHLIST:
            return{
                ...state,
                data:action.payload,
                isLoading:false,
    isError:false
            }
        case FAILURE_WISHLIST:
            return{
                ...state,
                data:[],
                isLoading:false,
                 isError:true
            }
        case REQUEST_WISHLIST:
            return{
                ...state,
                data:[],
                isLoading:true,
                isError:false
            }
        default:
            return state

    }
}