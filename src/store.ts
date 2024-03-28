import { combineReducers, legacy_createStore as createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { authReducers } from './redux/reducers/authReducers'
import { cartReducers } from './redux/reducers/cartReducers'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  auth: authReducers,
  cart : cartReducers,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
