
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        require([
                "esri/map",
                "esri/dijit/Search",
                "esri/geometry/webMercatorUtils",
                "esri/SpatialReference",
                "esri/symbols/SimpleMarkerSymbol",
                "esri/symbols/PictureMarkerSymbol",
                "esri/InfoTemplate",
                "esri/graphic",
                "esri/Color",
                "esri/geometry/Point",
                "dojo/on",
                "dojo/domReady!"
            ],
            function (Map, Search, webMercatorUtils, SpatialReference, SimpleMarkerSymbol, PictureMarkerSymbol, InfoTemplate, Graphic, Color, Point, on) {
                
                const mapArtist = new Map("mapArtist", {
                    basemap: "gray",
                    center: [-3.435, 40], // lon, lat
                    zoom: 7
                });

                const searchArtist = new Search({
                    map: mapArtist
                }, "searchArtist");
                searchArtist.startup();

                let lats = document.getElementsByName('lat1');
                let longs = document.getElementsByName('long1');

                let pictureMarkerSymbol = new PictureMarkerSymbol();
                // pictureMarkerSymbol.url = "https://image.flaticon.com/icons/png/512/95/95223.png";
                pictureMarkerSymbol.url = "https://image.flaticon.com/icons/png/512/70/70534.png";
                pictureMarkerSymbol.width = 30;
                pictureMarkerSymbol.height = 30;

                let markerSymbol = new SimpleMarkerSymbol();
                markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z");
                markerSymbol.setColor(new Color("#00FFFF"));

                mapArtist.on("load", function (evt) {
                    for (var i = 0; i < lats.length; i++) {
                        let coorLong = parseFloat(longs[i].value);
                        let coorLat = parseFloat(lats[i].value);
                        let point = new Point(coorLong, coorLat, new SpatialReference({wkid: 4326}));

                        let content = {
                            title: "Evento",
                            content: "Buenas tardes"
                        };
                        let popup = new InfoTemplate(content);

                        let graphic = new Graphic(point, pictureMarkerSymbol);
                        graphic.setInfoTemplate(popup);
                        mapArtist.graphics.add(graphic);


                    }
                });

                let cards = document.getElementsByClassName('mb-4');

                // function overEvent (evt) {
                //     console.log("Evt: " + evt)
                // }

            });

    }, false);
})();