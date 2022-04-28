var landUseUniqueList = [];
var propertiesUniqueList = [];
var paraValue;


var map = L.map('map', {
  center: [40.343182, -105.688103],
  zoom: 11
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieGludGlhbiIsImEiOiJjazh1bGtkOXMwY2h4M25wYXh2d3J5NGpzIn0.6f78lOG9zSD3Iicqt6nXqQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieGludGlhbiIsImEiOiJjazh1bGtkOXMwY2h4M25wYXh2d3J5NGpzIn0.6f78lOG9zSD3Iicqt6nXqQ'
}).addTo(map);

let layerGroup = L.layerGroup().addTo(map);

// import Recreation Assets data
const partySelect = document.querySelector('#party-filter');
const neighborList = document.querySelector('.neighbors ul');

const rocky_poi={
"type": "FeatureCollection",
"name": "rocky_poi",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "name": "Rocky Mountain Gateway", "x_lon_": -105.586701756, "y_lat_": 40.4137844794 }, "geometry": { "type": "Point", "coordinates": [ -105.586701755999968, 40.413784479000071 ] } },
{ "type": "Feature", "properties": { "name": "Continental Divide", "x_lon_": -105.810993361, "y_lat_": 40.421163843800002 }, "geometry": { "type": "Point", "coordinates": [ -105.810993360999987, 40.421163844000034 ] } },
{ "type": "Feature", "properties": { "name": "YMCA of the Rockies", "x_lon_": -105.569005929, "y_lat_": 40.345184099800001 }, "geometry": { "type": "Point", "coordinates": [ -105.569005928999957, 40.34518410000004 ] } },
{ "type": "Feature", "properties": { "name": "Grand Lake Lodge", "x_lon_": -105.82664473200001, "y_lat_": 40.259390294500001 }, "geometry": { "type": "Point", "coordinates": [ -105.826644731999977, 40.25939029400007 ] } },
{ "type": "Feature", "properties": { "name": "Wildwood Inn", "x_lon_": -105.57384677100001, "y_lat_": 40.402339198 }, "geometry": { "type": "Point", "coordinates": [ -105.573846770999978, 40.40233919800005 ] } },
{ "type": "Feature", "properties": { "name": "Old Forest Inn", "x_lon_": -105.662320889, "y_lat_": 40.3500345092 }, "geometry": { "type": "Point", "coordinates": [ -105.662320888999943, 40.350034509000068 ] } }
]
}

//写一个show信息的function

handlePartyFilterChange = function(){
  for (n of rocky_poi.features)
{
  if (n.properties.name == partySelect.value)
  {
    layerGroup.clearLayers();
    const geoJsonLayer = L.geoJSON(n, { pointToLayer: (p, latlng) => L.circleMarker(latlng, {
 color: '#f03',
 fillColor: '#f03',
 fillOpacity: 0.80
}) })
    .bindTooltip(cml => cml.feature.properties.name)
  .addTo(layerGroup);
  let url = `https://raw.githubusercontent.com/Anran0716/musa-611-final/main/rawdata/${n.properties.name}.geojson`;
  fetch(url)
     .then(resp => resp.json())
     .then(poi_data => {
       const geoJsonLayer1 = L.geoJSON(poi_data, { pointToLayer: (p, latlng) => L.circleMarker(latlng, {
    color: '#00e1ff',
    fillColor: '#00e1ff',
    fillOpacity: 0.80
}) })
       .bindTooltip(l => l.feature.properties.name)
       .addTo(layerGroup);
       update_poi_list(poi_data);
     }
   );


   const update_poi_list = function (data) {
     neighborListItems = {};
     neighborList.innerHTML = '';
     data.features.forEach(poi_feature => {
       const type = poi_feature.properties.fclass;
       const name1 = poi_feature.properties.name;
       const neighborListItem = htmlToElement(`
         <li class="neighbor ${type}">
          <a href="findRoute.html?orig=${partySelect.value}&dest=${name1}">
         <span class="name">${name1}</span>
           <span class="address">${type}</span>
           </a>
         </li>
       `);
       neighborList.appendChild(neighborListItem);
     });
}


return geoJsonLayer;
  }
}
}

partySelect.addEventListener('change',handlePartyFilterChange);





//L.geoJson(Boundary_Line)
