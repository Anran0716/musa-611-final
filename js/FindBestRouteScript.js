var map = L.map('map', {
  center: [40.343182, -105.688103],
  zoom: 11
});
var geojsonLineOptions = {
  weight: 3,
  color: "#fa7f88",
  fillOpacity: 0
};

const partySelect = document.querySelector('#party-filter');
const partySelect1 = document.querySelector('#party-filter1');

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieGludGlhbiIsImEiOiJjazh1bGtkOXMwY2h4M25wYXh2d3J5NGpzIn0.6f78lOG9zSD3Iicqt6nXqQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieGludGlhbiIsImEiOiJjazh1bGtkOXMwY2h4M25wYXh2d3J5NGpzIn0.6f78lOG9zSD3Iicqt6nXqQ'
}).addTo(map);

let layerGroup = L.layerGroup().addTo(map);

var queryString = window.location.search; // Returns:'?orig=YMCA+of+the+Rockies&dest=Wind+River+Bluff'

// Further parsing:
let params = new URLSearchParams(queryString);
let originName = params.get("orig"); // is the number 'YMCA of the Rockies'
let destinatioNname = params.get("dest"); // is the number 'Wind River Bluff'

//according to the input origin and destination, find ou
//test with one dataset
//switch the route name into desination
console.log(`The current origin is ${originName}.`);
let url = `https://raw.githubusercontent.com/Anran0716/musa-611-final/main/rawdata/Tour route/${originName}.geojson`;
fetch(url)
   .then(resp => resp.json())
   .then(poi_data => {
     let feature1;
     for (let i=0;i<poi_data.features.length;i++){
       const f = poi_data.features[i];
       if(f.properties.name == destinatioNname)
       {
         let feature1=f;
         //insert origin & destination

        const geoJsonLayer1 =  L.geoJSON(feature1, {style: geojsonLineOptions}).addTo(layerGroup);
       }
     }
})
