var mapa;

function initMap() {

    //VARIÁVEIS DE TRAJETO
    var clodoaldoArruda = {lat: -3.817807046661953,lng: -38.47524421064372};
    var washingtonSoares =  {lat: -3.813718385729923,lng: -38.480242507142975};
    var washingtonSoares1 = {lat: -3.8130002, lng: -38.47964644};
    var ws2 =  {lat: -3.8122776,lng: -38.47912878};
    var ws3 = {lat: -3.81145331,lng: -38.47880691};
    var ws4 = {lat:-3.81078959,lng: -38.47866073};
    var egidioDeOliveira = {lat: -3.81054471,lng: -38.47613342};
    var elizeuOria = {lat: -3.80814275,lng: -38.47635403};
    var ml1 = {lat: -3.80802499,lng: -38.47549573};
    var ml2 = {lat: -3.80778145,lng: -38.47258955};
    var ml3 = {lat: -3.80773863,lng: -38.47129807};

    //VARIÁVEIS DE LOCALIZAÇÃO
    var meuLatLng = {lat: -3.817807046661953,lng: -38.47524421064372};
    var igrejaDaPaz = {lat: -3.81290385,lng: -38.44960302};

    mapa = new google.maps.Map(document.getElementById('mapa'), {
        center: meuLatLng,
        zoom: 15
    });

    var arrayDeEnderecos = [clodoaldoArruda, washingtonSoares, washingtonSoares1, ws2, ws3, ws4, egidioDeOliveira, elizeuOria,
    ml1, ml2, ml3];
    var trajeto = new google.maps.Polyline({
        path: arrayDeEnderecos,
        strokeColor: "#2e6af1",
        strokeOpacity: 1,
        strokeWeight: 4
    });

    trajeto.setMap(mapa);

    var marcador = new google.maps.Marker({
        position: meuLatLng,
        map: mapa,
        title: "Rua Clodoaldo Arruda"
    });

    var marcadorIgrejaDaPaz = new google.maps.Marker({
        position: igrejaDaPaz,
        map: mapa,
        title: "Igreja da Paz Fortaleza"
    });

    var info = new google.maps.InfoWindow({
        content: "Igreja da Paz"
    });
    info.open(mapa,marcadorIgrejaDaPaz);
}

