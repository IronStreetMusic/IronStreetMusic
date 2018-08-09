
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });

        require([
            "esri/map",
            "esri/dijit/Search",
            "esri/geometry/webMercatorUtils",
            "esri/SpatialReference",
            "esri/symbols/SimpleMarkerSymbol",
            "esri/graphic",
            "esri/Color",
            "esri/geometry/Point",
            "dojo/on",
            "dojo/domReady!"
        ],
        function (Map, Search, webMercatorUtils, SpatialReference, SimpleMarkerSymbol, Graphic, Color, Point, on) {
            const map2 = new Map("map", {
                basemap: "gray",
                center: [-3.435, 40], // lon, lat
                zoom: 7
            });

            const search = new Search({
                map: map2
            }, "search");
            search.startup();

            let lats = document.getElementsByName('lat1');
            let longs = document.getElementsByName('long1');

            var markerSymbol = new SimpleMarkerSymbol();
            markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
            markerSymbol.setColor(new Color("#00FFFF"));

            map2.on("load", function(evt) {
                for (var i = 0; i < lats.length; i++) {
                    let coorLong = parseFloat(longs[i].value);
                    let coorLat = parseFloat(lats[i].value);
                    map2.graphics.add(new Graphic(new Point(coorLong, coorLat, new SpatialReference({ wkid: 4326 })), markerSymbol));
                }
            });

        });
    }, false);

    
})();
