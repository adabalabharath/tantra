import { FAILURE_PRODUCT, REQUEST_PRODUCT, SUCCESS_PRODUCT } from "./actionType";
const initial={
    data:[],
    isLoading:false,
    isError:false
}
export const productReducer=(state=initial,action)=>{
    switch (action.type){
        case REQUEST_PRODUCT:
          return{
            ...state,
             isLoading:true,
             isError:false,
             data:[]
          }
          case SUCCESS_PRODUCT:
          return{
             ...state,
             isLoading:false,
             isError:false,
             data:action.payload
          }
          case FAILURE_PRODUCT:
          return{
             ...state,
             isLoading:false,
             isError:true,
             data:[]
          }
          default:
            return state

    }
}