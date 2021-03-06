
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
            function (Map, Search, webMercatorUtils,
                 SpatialReference, SimpleMarkerSymbol, PictureMarkerSymbol, 
                 InfoTemplate, Graphic, Color, Point, on) {
                
                const mapArtist = new Map("mapArtist", {
                    basemap: "streets-night-vector",
                    center: [-3.435, 40], // lon, lat
                    zoom: 7
                });

                const searchArtist = new Search({
                    map: mapArtist
                }, "searchArtist");
                searchArtist.startup();

                let lats = document.getElementsByName('lat1');
                let longs = document.getElementsByName('long1');

                let eventsName = document.getElementsByName('eventName');
                let dates = document.getElementsByName('date');
                let addresses = document.getElementsByName('address');

                let pictureMarkerSymbol = new PictureMarkerSymbol();
                // pictureMarkerSymbol.url = "https://image.flaticon.com/icons/png/512/95/95223.png";
                // pictureMarkerSymbol.url = "https://image.flaticon.com/icons/png/512/70/70534.png";
                pictureMarkerSymbol.url = "/images/icono-conciertos.svg";
                pictureMarkerSymbol.width = 30;
                pictureMarkerSymbol.height = 30;

                mapArtist.on("load", function (evt) {
                    for (var i = 0; i < lats.length; i++) {
                        let coorLong = parseFloat(longs[i].value);
                        let coorLat = parseFloat(lats[i].value);
                        let point = new Point(coorLong, coorLat, new SpatialReference({wkid: 4326}));

                        let content = {
                            title: eventsName[i].innerText,
                            content: "<b>Dirección:</b> " + addresses[i].innerText + "<br><b>Fecha:</b> " + dates[i].innerText
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