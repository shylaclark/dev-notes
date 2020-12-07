import React, { Component } from 'react';
import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export default class MapComponent extends Component {

  componentDidMount() {

    var map = new Map({
      // target is the div element on the web page that contains the map
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 0
      })
    });

    this.setState({
      map: map,
    });

  } // componentDidMount

  render() {
    return (
      <div id="map"></div>
    );
  }

} // MapComponent
