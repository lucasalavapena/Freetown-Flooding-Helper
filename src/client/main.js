
require([
"esri/config",
"esri/Map",
"esri/views/MapView",

"esri/widgets/Search"

], function(esriConfig,Map, MapView, Search) {

// const {
//     ESRI_API_KEY
//     } = process.env; 

esriConfig.apiKey = "API";

const map = new Map({
basemap: "arcgis-navigation"
});

const view = new MapView({
container: "viewDiv",
map: map,
center: [-122.3321,47.6062],
zoom: 12
});

const search = new Search({  //Add Search widget
view: view
});

view.ui.add(search, "top-right"); //Add to the map

});