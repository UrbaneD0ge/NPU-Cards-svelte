<script>
  let geoStatus = 'Find your location';
  function geoLocate() {
    // Get the location of the user and put address in the input field
    if (!navigator.geolocation) {
      geoStatus = 'Geolocation is not supported by your browser';
      return;
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // const lat = document.querySelector('#lat');
      // const lon = document.querySelector('#lon');
      // lat.value = latitude;
      // lon.value = longitude;
      geoStatus =
        'Location found: ' + latitude.toFixed(2) + ', ' + longitude.toFixed(2);
      // pass geoStatus as a prop to NPU.svelte
      getNPU(latitude, longitude);
      return latitude, longitude;
    }
    function error() {
      geoStatus = 'Unable to retrieve your location';
    }
    navigator.geolocation.getCurrentPosition(success, error);
    return;
  }

  function addySearch() {
    // Get the location of the user and put address in the input field
    let address = document.getElementById('address').value;
    if (address == '') {
      geoStatus = 'Please enter an address';
      return;
    }
    let addressEncoded = encodeURIComponent(address);
    let uriToFetch = `https://gis.atlantaga.gov/dpcd/rest/services/SiteAddressPoint/GeocodeServer/findAddressCandidates?Street=&Single+Line+Input=${addressEncoded}&maxLocations=1&matchOutOfRange=true&inSR=4130&outSR=4130&f=pjson`;
    console.log(uriToFetch);
    fetch(uriToFetch)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let latitude = data.candidates[0]?.location.y;
        let longitude = data.candidates[0]?.location.x;
        if (latitude && longitude) {
          geoStatus =
            'Location found: ' +
            latitude.toFixed(2) +
            ', ' +
            longitude.toFixed(2);
          getNPU(latitude, longitude);
        } else {
          results.innerText = 'Not Found!?';
        }
      });
  }

  function getNPU(latitude, longitude) {
    let results = document.getElementById('results');
    let npuCard = document.getElementById('npuCard');
    let npuLink = document.getElementById('npuLink');
    fetch(
      `https://services5.arcgis.com/5RxyIIJ9boPdptdo/arcgis/rest/services/Official_NPU/FeatureServer/0/query?where=1%3D1&outFields=NAME&geometry=${longitude}%2C${latitude}%2C${longitude}%2C${latitude}&geometryType=esriGeometryEnvelope&inSR=4130&spatialRel=esriSpatialRelIntersects&returnGeometry=false&outSR=4130&f=json`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.features[0].attributes.NAME
          ? console.log('NPU:' + data.features[0].attributes.NAME)
          : console.log('not found');
        // console.log(data.features[0].attributes.NAME);
        let npu = data.features[0].attributes.NAME;
        results.innerText = npu;
        npuCard.style.display = 'block';

        npuLink.href = `/${npu}`;
        if (!data.features[0].attributes.NAME) {
          results.innerText = 'Not Found!?';
        }
      });
  }
</script>

<div>
  <form class="col s12">
    <div class="row m2">
      <br />
      <div class="input-field col s12">
        <input id="address" type="text" class="" />
        <label for="Address">Address</label>
        <div class="row">
          <div class="col">
            <button on:click={addySearch} class="btn green m-2"
              >Address Search</button
            >
          </div>
          <div class="col">
            <button on:click|once={geoLocate} class="btn blue m-2"
              >🧭 Locate Me</button
            >
          </div>
        </div>
        <span
          id="geoStatus"
          class="helper-text"
          data-error="Can't get your location..">{geoStatus}</span
        >
      </div>
    </div>
  </form>

  <div id="npuCard" class="center-align" hidden>
    <div class="cardParent flip-card">
      <div class="card flip-card-inner">
        <div class="card-content center-align flip-card-front">
          <h3>Your NPU is:</h3>
          <a id="npuLink">
            <h1 id="results">results go here</h1>
          </a>
          <br />
        </div>
        <div class="flip-card-back">
          <h1>Back</h1>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .cardParent {
    display: flex;
    justify-content: center;
  }

  .card {
    width: 400px;
    height: 400px;
  }

  #results {
    font-size: 10rem;
  }

  /* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  /* Style the back side */
  .flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  }
</style>
