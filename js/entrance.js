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

var map = L.map('map', {
  center: [40.33735014241628, -105.7256302359381],
  zoom: 10
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieGludGlhbiIsImEiOiJjazh1bGtkOXMwY2h4M25wYXh2d3J5NGpzIn0.6f78lOG9zSD3Iicqt6nXqQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieGludGlhbiIsImEiOiJjazh1bGtkOXMwY2h4M25wYXh2d3J5NGpzIn0.6f78lOG9zSD3Iicqt6nXqQ'
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 6,
    fillColor: "#f7a3ba",
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
