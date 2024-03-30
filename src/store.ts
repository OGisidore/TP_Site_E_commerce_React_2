import { combineReducers, legacy_createStore as createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { authReducers } from './redux/reducers/authReducers'
import { cartReducers } from './redux/reducers/cartReducers'
import { notificationReducers } from './redux/reducers/notificationReducers'
import { storageReducers } from './redux/reducers/storageReducers'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  auth: authReducers,
  cart : cartReducers,
  datas : notificationReducers,
  storage : storageReducers
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
