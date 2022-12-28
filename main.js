let latitude = 22.7868542, longitude = 88.3543256

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl({
    container : 'map',
    style : 'mapbox://styles/mapbox/streets-v11',
    center : [longitude,latitude],
    zoom : 4,
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuraccy : true,
        },
        trackUserLocation : true
    })
);

map.addControl(
    new MapBoxGeocoder({
        accessToken : mapboxgl.accessToken,
        mapboxgl : mapboxgl
    }).on('result', function(e){
        destination = e.result.center
    })
);

var img1 = document.querySelector("#amber");
var marker1 = new mapboxgl.Marker({
    element : img1
})
.setLngLat([75.85133,26.98547])
.addTo(map)

var img2 = document.querySelector("#gateway");
var marker2 = new mapboxgl.Marker({
    element : img2
})
.setLngLat([75.85133,26.98547])
.addTo(map)

var img3 = document.querySelector("#gate");
var marker3 = new mapboxgl.Marker({
    element : img3
})
.setLngLat([75.85133,26.98547])
.addTo(map)

var img4 = document.querySelector("#lotus");
var marker4 = new mapboxgl.Marker({
    element : img4
})
.setLngLat([75.85133,26.98547])
.addTo(map)

var img5 = document.querySelector("#victoria");
var marker5 = new mapboxgl.Marker({
    element : img5
})
.setLngLat([75.85133,26.98547])
.addTo(map)