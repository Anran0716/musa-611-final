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
function defineorigin(originArgument, drawRoute=true){
  console.log(`The current origin is ${originArgument}.`);
  let url = `https://raw.githubusercontent.com/Anran0716/musa-611-final/main/rawdata/Tour route/${originArgument}.geojson`;
  //fetch data for the current origin
  fetch(url)
     .then(resp => resp.json())
     .then(poi_data => {
       let feature1;
       if (drawRoute == true) {
         for (let i=0;i<poi_data.features.length;i++){
           const f = poi_data.features[i];
           if(f.properties.name == destinatioNname)
           {
             let feature1=f;
             //insert origin & destination

            const geoJsonLayer1 =  L.geoJSON(feature1, {style: geojsonLineOptions}).addTo(layerGroup).bindTooltip(l => l.feature.properties.name);
           }
           if(f.properties.name == originArgument)
           {
             let feature1=f;
            const geoJsonLayer2 =  L.geoJSON(feature1, {style: geojsonLineOptions}).addTo(layerGroup).bindTooltip(l => l.feature.properties.name);
           }
         }
       }

       initializeDestChoices(poi_data.features);
  })
}
defineorigin(originName);
function handleoriginchange(){
  defineorigin(selectbox.value, false);
}
var selectbox = document.querySelector('#party-filter');;
selectbox.addEventListener('change',handleoriginchange);


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
  destorder.innerHTML='';
  destination_group.forEach(dest_name => {
    destorder.appendChild(htmlToElement(`<option>${dest_name}</option>`));
  });
};

//when the user click 'search'
const search = function(){
  let origin=document.getElementById('party-filter');
  let destination=document.getElementById('party-filter1');
  let url = `findRoute.html?orig=${origin.value}&dest=${destination.value}`;
  window.location=url;
  initializeDestChoices(poi_data.features);
}
