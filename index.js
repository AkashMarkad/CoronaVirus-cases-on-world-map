function updateMap() {
     fetch('https://akashmarkad.github.io/CoronaVirus-cases-on-world-map/data.json')
    .then(response => response.json())
    .then(rsp => {
        rsp.data.forEach(element => {
            latitude = element.latitude
            longitude = element.longitude

            cases = element.infected;
            if (cases > 255){
                color = "rgb(255 , 0, 0)";
            }

            else{
                color = `rgb(${color}, 0 , 0`
            }

            // Mark on the Map 
            new mapboxgl.Marker({
                draggable: false,
                color: color
            })
            .setLngLat([longitude , latitude])
            .addTo(map);
        });
    })
}

updateMap();
