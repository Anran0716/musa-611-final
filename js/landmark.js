const landmarks = [
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "Name": "Longs Peak"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.61517715454102,
            40.255097149742184
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "Name": "Bear Lake"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.64816107467729,
            40.31347288713031
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "Name": "Glacier Basin"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.81414282652261,
            40.254569551496
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "Name": "Moraine Park "
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.61530590057373,
            40.26187645698388
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "Name": "Timber Creek"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.82779644262973,
            40.37241913643971
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "Name": "Grand Lake"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -105.81397279009997,
            40.24377732699526
          ]
        }
      }
    ]
  }];



var geojsonMarkerOptions = {
  radius: 10,
  fillColor: "#ff406c",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.7
};


var layer = L.geoJSON(landmarks, {
  pointToLayer(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
})
  .bindTooltip(layer => ` <b>Name</b>:  ${layer.feature.properties.Name}`).addTo(map);
