const entrance = [{
"type": "FeatureCollection",
"name": "Entrance",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Name": "Beaver Meadows Entrance", "description": null }, "geometry": { "type": "Point", "coordinates": [ -105.5811699, 40.3666149 ] } },
{ "type": "Feature", "properties": { "Name": "Fall River Entrance", "description": null }, "geometry": { "type": "Point", "coordinates": [ -105.5919225, 40.4043624 ] } },
{ "type": "Feature", "properties": { "Name": "Wild Basin Entrance", "description": null }, "geometry": { "type": "Point", "coordinates": [ -105.5664208, 40.2085572 ] } },
{ "type": "Feature", "properties": { "Name": "Grand Lake Entrance", "description": null }, "geometry": { "type": "Point", "coordinates": [ -105.8259761, 40.2474649 ] } }
]
}]



var geojsonMarkerOptions = {
    radius: 10,
    fillColor: "#cf3b2d",
    color: "#000",
    weight: 0.5,
    opacity: 1,
    fillOpacity: 1
};


var layer = L.geoJSON(entrance,{ pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    } }).bindTooltip(layer => ` <b>Entrance</b>
   <br><b>Name</b>:  ${layer.feature.properties.Name}</br>`,
  {permanent: false,
    offset: [-50, -60],
    direction: "right",
}).addTo(map);
