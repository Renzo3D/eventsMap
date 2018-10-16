//import React, { Component } from 'react';
import React from 'react';
import MapLocation from './components/googleMap/MapLocation';

export default class App extends React.Component{
  render(){
    return(
    <div className='container'>
    
      <div className="row">
          <div className="col-12 col-md-12 mb-12">
            <MapLocation />
          </div>
      </div>

    </div>
    )
  }
};
