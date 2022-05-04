var geojsonLineOptions = {
  weight: 5,
  color: "#2a0078",
  fillOpacity: 0
};

const partySelect = document.querySelector('#party-filter');
const partySelect1 = document.querySelector('#party-filter1');


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
       if(f.properties.name == originName)
       {
         let feature1=f;
         //insert origin & destination

        const geoJsonLayer2 =  L.geoJSON(feature1, {style: geojsonLineOptions}).addTo(layerGroup);
       }
     }
     initializeDestChoices(poi_data.features);
})

let initializeDestChoices = (features) => {
  let destination_group = [];
  features.forEach(feature => {
    let dest_name = feature.properties.name;
    if (!destination_group.includes(dest_name)) {
      destination_group.push(dest_name);
    }
  });
  //dest_name.sort();
  let destorder = document.getElementById('party-filter1');
  destination_group.forEach(dest_name => {
    destorder.appendChild(htmlToElement(`<option>${dest_name}</option>`));
  });
};

const search = function(){
  let origin=document.getElementById('party-filter');
  let destination=document.getElementById('party-filter1');
  let url = `findRoute.html?orig=${origin.value}&dest=${destination.value}`;
  window.location=url;
  initializeDestChoices(poi_data.features);
}
