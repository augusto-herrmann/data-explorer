import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
// import datapackage from './testData.json'

const initialState = {
  dataViewBuilder: {
    test: 100
  },
  filterUI: {
    test: 1000
  },
  sharedState: {
    loading: false,
    datapackage: {views: []},
    loadedData: {}
  }
}

export default function configureStore(props) {
 
 return createStore(
   rootReducer,
   Object.assign({}, initialState, props),
   applyMiddleware(thunk)
 )
}
