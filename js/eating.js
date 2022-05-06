/*eslint-env es6*/
const eating = [
  {
    "type": "Feature",
    "properties": {
      "osm_id": "955162247", "code": 2303, "fclass": "cafe", "name": "Starbucks"
    },
    "geometry": { "type": "Point", "coordinates": [-105.5164694, 40.3802367] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "955167305", "code": 2301, "fclass": "restaurant", "name": "Mountain Home Cafe"
    },
    "geometry": { "type": "Point", "coordinates": [-105.5154795, 40.3812163] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "955211623", "code": 2301, "fclass": "restaurant", "name": "Dunraven Inn"
    },
    "geometry": { "type": "Point", "coordinates": [-105.5683063, 40.3493323] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "3280737435", "code": 2301, "fclass": "restaurant", "name": "Sundeck Restaurant"
    },
    "geometry": { "type": "Point", "coordinates": [-105.54517, 40.3643626] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "6410748887", "code": 2302, "fclass": "fast_food", "name": "Fresh Burger Stop"
    },
    "geometry": { "type": "Point", "coordinates": [-105.54062, 40.3647103] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "6722093481", "code": 2301, "fclass": "restaurant", "name": "Trail Ridge Cafe"
    },
    "geometry": { "type": "Point", "coordinates": [-105.753478, 40.4414505] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "6799660493", "code": 2303, "fclass": "cafe", "name": "Fat Cat Cafe"
    },
    "geometry": { "type": "Point", "coordinates": [-105.8170352, 40.2510059] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "6799660494", "code": 2301, "fclass": "restaurant", "name": "Grand Pizza"
    },
    "geometry": { "type": "Point", "coordinates": [-105.816886, 40.2512703] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "6799722594", "code": 2301, "fclass": "restaurant", "name": "Sagebrush BBQ & Grill"
    },
    "geometry": { "type": "Point", "coordinates": [-105.8176959, 40.2514244] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "6799747889", "code": 2301, "fclass": "restaurant", "name": "El Pacifico"
    },
    "geometry": { "type": "Point", "coordinates": [-105.8203488, 40.2516219] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "6799747890", "code": 2301, "fclass": "restaurant", "name": "Squeaky B's"
    },
    "geometry": { "type": "Point", "coordinates": [-105.8193189, 40.2514316] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "6831995966", "code": 2302, "fclass": "fast_food", "name": "Mountain Burger Works"
    },
    "geometry": { "type": "Point", "coordinates": [-105.8199054, 40.2515311] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "6833527284", "code": 2302, "fclass": "fast_food", "name": "Miyauchi's Snack Bar and Homemade Ice Cream"
    },
    "geometry": { "type": "Point", "coordinates": [-105.8186479, 40.2507183] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "6833590146", "code": 2303, "fclass": "cafe", "name": "Blue Water Bakery Cafe"
    },
    "geometry": { "type": "Point", "coordinates": [-105.8199622, 40.2513566] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "7644204817", "code": 2301, "fclass": "restaurant", "name": "Rustic Café"
    },
    "geometry": { "type": "Point", "coordinates": [-105.57201, 40.3403508] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "7774681158", "code": 2301, "fclass": "restaurant", "name": "Walnut Dining"
    },
    "geometry": { "type": "Point", "coordinates": [-105.5727861, 40.340192] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "7972130985", "code": 2301, "fclass": "restaurant", "name": "One Love Rum Kitchen"
    },
    "geometry": { "type": "Point", "coordinates": [-105.8199971, 40.2515341] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "8999711585", "code": 2303, "fclass": "cafe", "name": "Notchtop Bakery and Cafe"
    },
    "geometry": { "type": "Point", "coordinates": [-105.5147729, 40.3811842] }
  },
  {
    "type": "Feature",
    "properties": {
      "osm_id": "8999711588", "code": 2302, "fclass": "fast_food", "name": "Domino's"
    },
    "geometry": { "type": "Point", "coordinates": [-105.5153844, 40.3813068] }
  }
];

var geojsonMarkerOptions = {
  radius: 9,
  fillColor: "#db9b42",
  color: "#8a2c0a",
  weight: 0.5,
  opacity: 1,
  fillOpacity: 1
};


var layer = L.geoJSON(eating, {
  pointToLayer(feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).bindTooltip(
  layer => ` <b>restaurant</b>
   <br><b>Name</b>:  ${layer.feature.properties.name}</br>`,
  {
    permanent: false,
    offset: [-50, -60],
    direction: "right",
  }
).addTo(map);
