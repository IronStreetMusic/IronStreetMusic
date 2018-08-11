
(function () {
    'use strict';
    window.addEventListener('load', function () {
    require([
        "esri/map",
        "esri/dijit/Search",
        "esri/geometry/webMercatorUtils",
        "dojo/on",
        "dojo/domReady!"
    ], function (Map, Search, webMercatorUtils, on) {
        const map = new Map("mapEvents", {
            basemap: "streets-night-vector",
            center: [-3.435, 40], // lon, lat
            zoom: 7
        });

        const search = new Search({
            map: map
        }, "searchEvents");
        search.startup();

        on(search, 'select-result', function (e) {
            let address = e.result.feature.attributes.StAddr;
            let city = e.result.feature.attributes.City
            let value = webMercatorUtils.xyToLngLat(e.result.feature.geometry.x, e.result.feature.geometry.y, true);
            let lng = value[0];
            let lat = value[1];
            document.getElementById('address').value = address;
            document.getElementById('city').value = city;
            document.getElementById('long').value = lng;
            document.getElementById('lat').value = lat;
        });
    });

    }, false);

})();

