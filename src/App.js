import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import FilterUI from './components/FilterUI'
import DataView from 'datapackage-views-js'
//import DataView from './components/DataView'
import DataViewBuilder from './components/DataViewBuilder'
import { filterUIAction, fetchDataAction, dataViewBuilderAction } from './actions/';

export const App = props => {
  console.log('APP', props)
  
  return (
    <div className="text-center ml-6">
      <header>
        <div className="container">
          <h1 className="text-3xl">Data Explorer</h1>
        </div>
      </header>
      <div className="container py-6 bg-pink-100">
        <div className="">
          <FilterUI {...props} />
        </div>
      </div>
      <div className="container flex py-6 bg-yellow-100">
        <div className="w-3/4 p-4 mr-4 overflow-x-auto">
          <DataView {...props.sharedState} />
        </div>
        <div className="w-1/4 p-4 mr-4 bg-green-100">
          <DataViewBuilder {...props} />
        </div>
      </div>
     </div>
  )
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 filterUIAction: () => dispatch(filterUIAction()),
 fetchDataAction: () => dispatch(fetchDataAction()),
 dataViewBuilderAction: () => dispatch(dataViewBuilderAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
