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
      // console.log(latitude, longitude);
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
    if (address.value == '') {
      geoStatus = 'Please enter an address';
      return;
    }
    let addressEncoded = encodeURIComponent(address.value);
    let uriToFetch = `https://geocode.maps.co/search?street=${addressEncoded}&city=Atlanta`;
    // console.log(uriToFetch);
    fetch(uriToFetch)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // if (data.candidates.length === 0) {
        //   // console.log('Address not found');
        //   geoStatus = 'Address not found. Example: 123 Peachtree St. NE';
        //   document.getElementById('npuCard')?.setAttribute('hidden', true);
        //   return;
        // }
        // console.log(data[0].lat, data[0].lon);
        let latitude = Number(data[0]?.lat);
        let longitude = Number(data[0]?.lon);
        if (data[0]) {
          // console.log(latitude, longitude);
          geoStatus = 'Location found: ' + data[0].display_name;
          getNPU(latitude, longitude);
        } else {
          geoStatus = 'Not found.. Example: 123 Peachtree St NE';
          results.innerText = '🤔';
          npuLink.removeAttribute('href');
        }
      });
  }

  function getNPU(latitude, longitude) {
    let results = document.getElementById('results');
    let npuCard = document.getElementById('npuCard');
    let npuLink = document.getElementById('npuLink');
    address.value = '';
    fetch(
      `https://services5.arcgis.com/5RxyIIJ9boPdptdo/arcgis/rest/services/Official_NPU/FeatureServer/0/query?where=1%3D1&outFields=NAME&geometry=${longitude}%2C${latitude}%2C${longitude}%2C${latitude}&geometryType=esriGeometryEnvelope&inSR=4130&spatialRel=esriSpatialRelIntersects&returnGeometry=false&outSR=4130&f=json`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        if (data.features.length == 0) {
          // console.log('No NPU found for this point.');
          npuCard.setAttribute('hidden', true);
          geoStatus += ' ⚠ Not inside Atlanta City limits!';
          return;
        }
        data.features[0].attributes.NAME;
        // ? console.log('NPU:' + data.features[0].attributes.NAME)
        // : console.log('not found');
        try {
          let npu = data.features[0].attributes.NAME;
          results.innerText = npu;
          npuCard.removeAttribute('hidden');
          npuLink.href = `/${npu}`;
        } catch {
          results.innerText = '🤔';
          npuCard.removeAttribute('hidden');
        }
      });
  }
</script>

<div>
  <form class="col s12">
    <div class="row m2">
      <br />
      <div class="input-field col s12">
        <input
          name="address"
          id="address"
          type="text"
          autocomplete="address-line1"
        />
        <label for="address">Address</label>
        <div class="row">
          <div class="col">
            <button on:click|preventDefault={addySearch} class="btn teal m-2"
              >Address Search</button
            >
          </div>
          <div class="col">
            <button
              on:click|preventDefault={geoLocate}
              class="btn amber accent-3 m-2">🧭 Locate Me</button
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
    <div class="cardParent">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="card">
        <div class="card-content center-align">
          <h3>YOUR NPU IS:</h3>
          <a id="npuLink">
            <h1 id="results">Not found!</h1>
          </a>
          <br />
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
    width: 350px;
    height: 350px;
    scale: 1;
    transition: scale 0.5s ease-out;
  }

  .card:hover {
    scale: 1.05;
    transition: scale 0.5s ease-out;
  }

  #results {
    font-size: 10rem;
  }

  @font-face {
    font-family: 'Tungsten-SemiBold';
    src: url(fonts/Tungsten-Semibold.otf) format('opentype');
    letter-spacing: 2pt;
  }

  @font-face {
    font-family: 'GT-Eesti';
    src: url(fonts/GT-Eesti-Display-Regular.otf) format('opentype');
  }

  h1 {
    font-family: 'Tungsten-SemiBold';
    font-size: 11rem;
    margin: 0;
  }
  h3 {
    font-family: 'Tungsten-SemiBold';
    font-size: 3.5rem;
  }

  label,
  input,
  span {
    font-family: 'Gt-Eesti';
    font-size: 1.4rem;
  }
  button {
    font-family: 'Gt-Eesti';
  }
</style>
