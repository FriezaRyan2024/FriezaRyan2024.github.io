// async function InitMap(){
//   const { Map } = await google.maps.importLibrary("maps");
//   const directionsService = await google.maps.importLibrary(
//     "DirectionsService"
//   );
//   const directionsRenderer = await google.maps.importLibrary(
//     "DirectionsRenderer"
//   );
//   var location = { lat: 52.385259, lng: 4.861545 };

//   var map = new Map(document.getElementById("map-canvas"), {
//     zoom: 15,
//     center: location,
//     scrollwheel: false,
//   });

//   var marker = new map.Marker({
//     position: location,
//     map: map,
//     title: "Westervilla"
//   });

//   directionsRenderer.setMap(map);

//   const onChangeHandler = function () {
//     calculateAndDisplayRoute(directionsService, directionsRenderer);
//   };

//   document.getElementById("start").addEventListener("change", onChangeHandler);
//   document.getElementById("end").addEventListener("change", onChangeHandler);
// };

// function calculateAndDisplayRoute(directionsService, directionsRenderer) {
//   directionsService
//     .route({
//       origin: {
//         query: document.getElementById("start").value,
//       },
//       destination: {
//         query: document.getElementById("end").value,
//       },
//       travelMode: google.maps.TravelMode.DRIVING,
//     })
//     .then((response) => {
//       directionsRenderer.setDirections(response);
//     })
//     .catch((e) => window.alert("Directions request failed due to " + status));
// }
