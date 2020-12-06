# GeoJSON

## Basics
* [JSON](http://json.org/)
* Dimensions: longitude, latitude (x, y)
* Coordinate: single decimal number representing a single dimension
* Position: array of coordinates in order `[longitude, latitude, elevation]`

## Geometry
Geometries are shapes and nothing more.

### Point

Single position

```
{
  "type": "Point",
  "coordinates": [0, 0]
}
```

### LineString

2+ positions

```
{
  "type": "LineString",
    "coordinates": [
      [0, 0], [10, 10]
    ]
}
```

### Polygon

Made up of LinearRings, loops of positions.

* LinearRings
  * Exterior: Every polygon has one, comes first, defines what's filled
  * Interior: Defines what's empty if polygon has a hole

```
{
  "type": "Polygon",
  "coordinates": [
    [
      [0, 0], [10, 10], [10, 0], [0, 0]
    ]
  ]
}
```

## Properties

Can be any kind of JSON object, but usually just single-depth key/value mappings.

## Feature

A feature has geometry and properties.

```
{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [0, 0]
  },
  "properties": {
    "name": "null island"
  }
}
```

## Multi Geometries

More than one of the same kind of geometry (e.g. United States polygon plus HI polygon and AK polygon).

#### MultiPoint

`[[0, 0], [1, 1]]`

#### MultiPolygon

#### MultiLineString

## GeometryCollection

When you have a bunch of different kinds of geometries that refer to the same thing. Rare. Not recommended.

```
{
  "type": "Feature",
  "geometry": {
    "type": "GeometryCollection",
    "geometries": [{
      "type": "Point",
      "coordinates": [0, 0]
    }, {
      "type": "LineString",
      "coordinates": [[0, 0], [1, 0]]
    }]
  },
  "properties": {
    "name": "null island"
  }
}
```
## FeatureCollection

The most common. Object of type FeatureCollection that contains an array of Feature objects.

```
{
	"type":"FeatureCollection",
		"features":[{
			"type":"Feature",
			"geometry":{
				"type":"Polygon",
				"coordinates":[[
					[-109.59960937500003,47.8476557135582],
					[-98.43750000000003,46.4414057135582],
					[-102.744140625,34.4003900885582],
					[-111.708984375,37.9160150885582],
					[-109.59960937500003,47.8476557135582]
				]]
			},
			"properties":null
		}]
}
```

## Right Hand Rule

Polygons contain coordinates in an order. The exterior ring goes counterclockwise, the interior rings are clockwise.

## Resources

https://macwright.org/2015/03/23/geojson-second-bite
