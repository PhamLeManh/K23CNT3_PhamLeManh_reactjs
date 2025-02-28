import React, { Component } from 'react';
import PlmEventFrom1 from './components/PlmEventFrom1';
import PlmEventFrom2 from './components/PlmEventFrom2';
import PlmEventFrom3 from './components/PlmEventFrom3';
import PlmEventFrom4 from './components/PlmEventFrom4';
import PlmEventForm5 from './components/PlmEventFrom5';


class PlmApp extends Component {
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event form - demo</h1>
        <hr/>
        <PlmEventFrom1 />
        <PlmEventFrom2 />
        <PlmEventFrom3 />
        <PlmEventFrom4 />
        <PlmEventForm5 />
      </div>
    );
  }
}

export default PlmApp;