import { applyMiddleware, createStore } from "redux";
import { logger } from "workbox-core/_private";
import rootReducer from "./root-reducer";
const middlewares=[
    logger
]
const store = createStore(rootReducer,applyMiddleware(
    ...middlewares
))


export default store 



