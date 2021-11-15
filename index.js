let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3),
        mapTypeId: "terrain",
    });
    test_yelp = d3.json('./yelp_business_v2.json', function (data) {
        for (var i = 0; i < 10; i++) {
            const marker = new google.maps.Marker({
                position: {
                    lat: data[i]['latitude'],
                    lng: data[i]['longitude'],
                },
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: "#f00",
                    fillOpacity: 0.35,
                    strokeWeight: 0,
                },
                map: map,

            })
            attachSecretMessage(marker, data[i]['city']);
        };

    });
    // console.log(test_yelp)

    // test = fetch('./test_yelp.json').then(resp => resp.json()).then(json => console.log(json));


}
// Loop through the results array and place a marker for each
// set of coordinates.
function attachSecretMessage(marker, secretMessage) {
    const infowindow = new google.maps.InfoWindow({
        content: secretMessage,
    });

    marker.addListener("click", () => {
        infowindow.open(marker.get("map"), marker);
    });
}
const eqfeed_callback = function (results) {
    for (let i = 0; i < results.features.length; i++) {
        const coords = results.features[i].geometry.coordinates;
        const latLng = new google.maps.LatLng(coords[1], coords[0]);

        new google.maps.Marker({
            position: latLng,
            map: map,
        });
    }
};