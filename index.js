function updateMap() {
     fetch('https://akashmarkad.github.io/CoronaVirus-cases-on-world-map/data.json')
    .then(response => response.json())
    console.log(response);
    .then(rsp => {
        // console.log(rsp.data)
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
