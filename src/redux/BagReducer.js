import { FAILURE_BAG, REQUEST_BAG, SUCCESS_BAG } from "./actionType"

const initial={
    data:[],
    isLoading:false,
    isError:false,
    size:''
}

export const bagReducer=(state=initial,action)=>{
    
    switch(action.type){
        case SUCCESS_BAG:
            return{
                ...state,
                data:[...state.data,{...action.payload,size:action.size}],
                isLoading:false,
                
                isError:false
            }
        case FAILURE_BAG:
            return{
                ...state,
                data:[],
                isLoading:false,
                 isError:true
            }
        case REQUEST_BAG:
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