<script>
  let geoStatus = 'Click the 🧭 to find your location';
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
    geoStatus = "Location found: " + latitude + ", " + longitude;
    // pass geoStatus as a prop to NPU.svelte
    getNPU(latitude, longitude);
    return latitude, longitude;
  }
  function error() {
    geoStatus = 'Unable to retrieve your location';
  }
  navigator.geolocation.getCurrentPosition(success, error);
  return;
};

function addySearch() {
  // Get the location of the user and put address in the input field
  let address = document.getElementById('address').value;
  if (address == '') {
    geoStatus = 'Please enter an address';
    return;
  }
  let addressEncoded = encodeURIComponent(address);
  let uriToFetch = `https://gis.atlantaga.gov/dpcd/rest/services/SiteAddressPoint/GeocodeServer/findAddressCandidates?Street=&Single+Line+Input=${addressEncoded}&maxLocations=1&matchOutOfRange=true=&f=pjson`;
  console.log(uriToFetch)
  fetch(uriToFetch)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const latitude = data.candidates[0].location.y;
      const longitude = data.candidates[0].location.x;
      if (latitude && longitude) {
        getNPU(latitude, longitude);
      } else {
        results.innerText = 'Not Found!?';
      };
    });
};

function getNPU(latitude, longitude) {
  let results = document.getElementById('results');
  let npuCard = document.getElementById('npuCard');
  let npuLink = document.getElementById('npuLink');
  fetch(`https://services5.arcgis.com/5RxyIIJ9boPdptdo/arcgis/rest/services/Official_NPU/FeatureServer/0/query?where=1%3D1&outFields=NAME&geometry=${longitude}%2C${latitude}%2C${longitude}%2C${latitude}&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&returnGeometry=false&outSR=3857&f=json`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(data.features[0].attributes.NAME);
      const npu = data.features[0].attributes.NAME;
      results.innerText = npu;
      npuCard.style.display = 'block';
      npuLink.href = `/npu?NPU=${npu}`;
      if (!data.features[0].attributes.NAME) {
        results.innerText = 'Not Found!?';
      }
    });
}

</script>

  <div>
    <form class="col s12">
      <div class="row m2">
        <br>
        <div class="input-field col s6">
          <input id="address" type="text" class="">
          <label for="Address">Address</label>
          <button on:click={addySearch} class="btn green">Address Search</button>
          <button on:click={geoLocate} class="btn blue">🧭 Locate Me</button>
          <span id="geoStatus" class="helper-text" data-error="Can't get your location..">{geoStatus}</span>
        </div>
      </div>
    </form>

    <div id='npuCard' class='row center-align' hidden>
      <div class='col s3'>
        <div class="card">
          <div class="card-content">
            <p>Your NPU is:</p>
            <a id='npuLink'>
              <h1 id='results'>results go here</h1>
            </a>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>