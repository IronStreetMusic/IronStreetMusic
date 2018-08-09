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
            "esri/symbols/SimpleMarkerSymbol",
            "esri/graphic",
            "esri/Color",
            "esri/geometry/Point",
            "dojo/on",
            "dojo/domReady!"

        ],
        function (Map, Search, webMercatorUtils, SimpleMarkerSymbol, Graphic, Color, Point, on) {
            // var map2 = new Map("mapEvents", {
            //     basemap: "gray",
            //     center: [-120.435, 46.159], // lon, lat
            //     zoom: 7
            // });

            // var search = new Search({
            //     map: map2
            // }, "search2");
            // search.startup();

            let lats = document.getElementsByName('lat1');
            let longs = document.getElementsByName('long1');

            var markerSymbol = new SimpleMarkerSymbol();
            markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
            markerSymbol.setColor(new Color("#00FFFF"));

            on(map2, "load", function(evt) {
                console.log("Gráficos: " + map2.graphics)
                for (var i = 0; i < lats.length; i++) {
                    map2.graphics.add(new Graphic(new Point(longs[i], lats[i])), markerSymbol);
                }
            });

            // console.log("Gráficos: " + map2.graphics)
            // for (var i = 0; i < lats.length; i++) {
            //     map2.graphics.add(new Graphic(new Point(longs[i], lats[i])), markerSymbol);
            // }

            //map.graphics.add(new Graphic(, symbol));

        });
    }, false);

    
})();

// function showFormVis(){
//     if (document.getElementById("VIS").style.display==="none"){
//         document.getElementById("VIS").style.display ="block";
//         document.getElementById("VIP").style.display = "none";
//     }
// }

// function showFormVip() {
//     if (document.getElementById("VIP").style.display === "none") {
//         document.getElementById("VIP").style.display = "block";
//         document.getElementById("VIS").style.display = "none";
//     }
// }
