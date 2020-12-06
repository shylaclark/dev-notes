OpenLayers

## Get Started

#### 1. Include OpenLayers
`<script src="https://openlayers.org/en/v4.6.5/build/ol.js" type="text/javascript"></script>`

#### 2. Div to contain the map
`<div id="map" class="map"></div>`

#### 3. JavaScript to create a simple map

```
  var map = new ol.Map({
    target: 'map',  // target is the id of the div this will appear in
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 4
    })
  });
```
## About

### Layers
Layers are drawn on top of each other in the order in which they are defined. An opaque (raster) layer hides those below it.

### Controls

#### Attributions
Copyright, name of map provider, etc. (e.g. Mapbox requires you provide attribution by displaying their "wordmark".)

## Draw
https://openlayers.org/en/latest/examples/draw-features.html

## Random
* Return GeoJSON to create Vector Features on map.
* Fetch Layer from the PostGIS Datastore on GeoServer and display layers on map.

## Stack
* OpenLayers
* GeoServer
* PostGIS

## Resources

[Overlay types](https://www.nps.gov/maps/tools/npmap-builder/overlay-types/)

[OpenLayers 3: How to add controls](https://medium.com/gis-tips/openlayers-3-how-to-add-controls-36d10e05fa72)

http://geojson.io/#map=2/20.0/0.0

[OpenLayers Cookbook](http://www.acuriousanimal.com/Openlayers-Cookbook/)

[OpenLayers on gis.stackexchange.com](https://gis.stackexchange.com/questions/tagged/openlayers)

[OSM: OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:layer)

[OpenLayers.org examples](https://openlayers.org/en/latest/examples/)

## Cesium Resources

[Cesium docs](https://cesiumjs.org/Cesium/Build/Documentation/WebMapServiceImageryProvider.html)
