import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./reducer";
import { thunk } from "redux-thunk";
import { bagReducer } from "./BagReducer";
import { wishReducer } from "./WishlistReducer";

export const reducers=combineReducers({
    productReducer,
    bagReducer,
    wishReducer
})

export const store=legacy_createStore(reducers,applyMiddleware(thunk))