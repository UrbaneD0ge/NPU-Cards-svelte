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
    return latitude, longitude;
  }
  function error() {
    geoStatus = 'Unable to retrieve your location';
  }
  navigator.geolocation.getCurrentPosition(success, error);
};

function addySearch() {
  // Get the location of the user and put address in the input field
  let address = document.getElementById('address').value;
  if (address == '') {
    geoStatus = 'Please enter an address';
    return;
  }
  address.urlEncoded = function () {
    return encodeURIComponent(this);
  };
  fetch(`https://gis.atlantaga.gov/dpcd/rest/services/SiteAddressPoint/GeocodeServer/findAddressCandidates?Street=&Single+Line+Input=${address.urlEncoded}&maxLocations=1&matchOutOfRange=true=&f=pjson`)
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