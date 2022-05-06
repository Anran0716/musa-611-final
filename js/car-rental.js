const rental = [
  { "type": "Feature", "properties": { "Name": "Enterprise Rent-A-Car", "description": null }, "geometry": { "type": "Point", "coordinates": [-104.9817333, 39.8841929] } },
  { "type": "Feature", "properties": { "Name": "Enterprise Rent-A-Car", "description": null }, "geometry": { "type": "Point", "coordinates": [-105.0612252, 40.4076419] } },
  { "type": "Feature", "properties": { "Name": "Avis Car Rental", "description": null }, "geometry": { "type": "Point", "coordinates": [-104.813126, 39.69774] } },
  { "type": "Feature", "properties": { "Name": "Enterprise Rent-A-Car", "description": null }, "geometry": { "type": "Point", "coordinates": [-105.083507, 39.9154062] } },
  { "type": "Feature", "properties": { "Name": "Enterprise Rent-A-Car", "description": null }, "geometry": { "type": "Point", "coordinates": [-104.7290484, 40.3879342] } },
  { "type": "Feature", "properties": { "Name": "Budget Car Rental", "description": null }, "geometry": { "type": "Point", "coordinates": [-105.00389, 39.88442] } },
  { "type": "Feature", "properties": { "Name": "Enterprise Rent-A-Car", "description": null }, "geometry": { "type": "Point", "coordinates": [-105.1021592, 40.1599128] } },
  { "type": "Feature", "properties": { "Name": "Budget Car Rental", "description": null }, "geometry": { "type": "Point", "coordinates": [-105.07658, 40.51797] } },
  { "type": "Feature", "properties": { "Name": "Enterprise Rent-A-Car", "description": null }, "geometry": { "type": "Point", "coordinates": [-105.0766218, 40.5604845] } },
  { "type": "Feature", "properties": { "Name": "Enterprise Rent-A-Car", "description": null }, "geometry": { "type": "Point", "coordinates": [-104.8283195, 39.9703655] } }
];



var CarIcon = L.icon({
  iconUrl: './img/Picture1.png',
  iconSize: [63, 50], // size of the icon
  iconAnchor: [40, 40], // point of the icon which will correspond to marker's location
  popupAnchor: [-30, -30], // point from which the popup should open relative to the iconAnchor
});


var layer = L.geoJSON(rental, {
  pointToLayer(feature, latlng) {
    return L.marker(latlng, { icon: CarIcon });
  }
}).bindTooltip(
  layer => ` <b>Car Rental</b>
     <br><b>Name</b>:  ${layer.feature.properties.Name}</br>`,
  {
    permanent: false,
    offset: [-50, -60],
    direction: "right",
  }
).addTo(map);
