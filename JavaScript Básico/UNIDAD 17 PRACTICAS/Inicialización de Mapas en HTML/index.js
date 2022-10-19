function initMap() {
    const agSal = {
        lat: 14.8,
        lng: -90.16667
    }

    const sanarate = {
        lat: 14.7772035,
        lng: -90.19941085
    }

    const guasta = {
        lat: 14.8514699,
        lng: -90.0859762
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: agSal
    })

    const marker = new google.maps.Marker({
        position: agSal,
        map,
        title: "Agua Salóbrega"
    })

    const marker2 = new google.maps.Marker({
        position: sanarate,
        map,
        title: "Sanarate"
    })

    const marker3 = new google.maps.Marker({
        position: guasta,
        map,
        title: "Guastatoya"
    })
}

