        require([
                    "esri/map",
                    "esri/dijit/Search",
                    "esri/geometry/webMercatorUtils",
                    "dojo/on",
                    "dojo/domReady!"

                ], function (Map, Search, webMercatorUtils, on) {
                    var map = new Map("mapEvents", {
                        basemap: "gray",
                        center: [-120.435, 46.159], // lon, lat
                        zoom: 7
                    });

                    var search = new Search({
                        map: map
                    }, "search2");
                    search.startup();

                });