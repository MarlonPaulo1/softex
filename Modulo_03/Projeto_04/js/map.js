var map = L.map('map').setView([-8.0617353, -34.872876], 17);

var marker2 = L.marker([-8.060235409772941, -34.87000601500912]).addTo(map)
    .bindPopup('Museu Cais do Sertão')
    .openPopup()

var marker3 = L.marker([-8.061237360627587, -34.87154010316912]).addTo(map)
    .bindPopup('Paço do Frevo')
    .openPopup()    

var marker4 = L.marker([-8.060771523429256, -34.87167308967771]).addTo(map)
    .bindPopup('Bar Teatro Mamulengo')
    .openPopup() 

var marker5 = L.marker([-8.06334921853864, -34.86907557506449]).addTo(map)
    .bindPopup('Parque das Esculturas')
    .openPopup()

var marker = L.marker([-8.062972849523234, -34.871084269526406]).addTo(map)
    .bindPopup('Marco Zero')
    .openPopup()

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    attribution: '© OpenStreetMap'
}).addTo(map);