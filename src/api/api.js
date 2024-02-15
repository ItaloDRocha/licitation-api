getWeatherData();

async function getWeatherData() {
  const apiUrl = `../src/api/api.php`;
  const response = await fetch(apiUrl);
  console.log(response);

  let resposta = await response.json();
  console.log(resposta)
}


// $(document).ready(function () {
//   teste();
//   function teste() {
//     console.log("testerino");
//     $.get("api.php", function (data, textStatus, jqXHR) {
//       console.log(textStatus);
//       console.log(data);
//     });
//   }
// });
