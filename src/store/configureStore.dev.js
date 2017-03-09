import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import api from '../middleware/api'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
// 下载插件后 在开发者工具中选择 redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
      composeEnhancers(
      // applyMiddleware(thunk, api, createLogger()),
      applyMiddleware(thunk, api),

      // DevTools.instrument()
    )
  )

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  //     // 如果报错 Router  就忽略掉
  //     const orgError = console.error;
  //     console.error = (...args) => { // eslint-disable-line no-console
  //         if (args && args.length === 1 && (typeof args[0]  =='string') && args[0].indexOf('You cannot change <Router routes>;') > -1) {
  //             // React route changed
  //         } else {
  //             // Log the error as normally
  //             orgError.apply(console, args);
  //         }
  //     };
  // }

  return store
}

export default configureStore
