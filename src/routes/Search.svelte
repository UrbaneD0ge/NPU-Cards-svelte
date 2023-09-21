<script>
  import { fade } from 'svelte/transition';
  import { npu } from '../stores.js';

  let geoStatus = 'Find your location';
  let showCardBack = false;
  let placeName =
    'Search for your address below, or use your current location!';
  function geoLocate() {
    placeName = 'Using GeoLocation 📡';
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
        // console.log(data[0].lat, data[0].lon);
        let latitude = Number(data[0]?.lat);
        let longitude = Number(data[0]?.lon);
        if (data[0]) {
          // console.log(latitude, longitude);
          geoStatus = 'Location found!';
          placeName =
            '📍 ' + data[0].display_name.replace('Atlanta,', '\nAtlanta,');
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
          // npuCard.setAttribute('hidden', true);
          geoStatus += ' ⚠ Not inside Atlanta City limits!';
          return;
        }
        data.features[0].attributes.NAME;
        // ? console.log('NPU:' + data.features[0].attributes.NAME)
        // : console.log('not found');
        try {
          let cardFace = data.features[0].attributes.NAME;
          npu.set(cardFace);
          results.innerText = cardFace;
          npuCard.removeAttribute('hidden');
          npuLink.href = `/${cardFace}`;
          showCardBack = true;
        } catch {
          results.innerText = '🤔';
          npuCard.removeAttribute('hidden');
        }
      });
  }

  // const toggleShowBack = () => (showCardBack = !showCardBack);

  function clearForm() {
    showCardBack = false;
    // results.innerText = '';
    // npuCard.setAttribute('hidden', true);
    placeName = 'Search for your address below, or use your current location!';
    geoStatus = 'Find your location';
  }
</script>

<div>
  {#key placeName}
    <h2 transition:fade style="position:absolute">
      {placeName}
      <!-- Search for your address below, or use your current location! -->
    </h2>
  {/key}
  <form class="col s12">
    <div class="row">
      <br />
      <div class="input-field col s12">
        <input
          on:focus={clearForm}
          name="address"
          id="address"
          type="text"
          autocomplete="address-line1"
        />
        <label for="address">Address</label>
        <div class="row">
          <div class="col">
            <button
              on:click|preventDefault={addySearch}
              class="btn m-2"
              id="search">Address Search</button
            >
          </div>
          <div class="col">
            <button
              on:click|preventDefault={geoLocate}
              class="btn m-2"
              id="locate">🧭 Locate Me</button
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

  <!-- FRONT (logo) -->
  <div id="npuCardBack" class="center-align">
    <div class="cardParent flip-box">
      <!-- FRONT -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="card flip-box-inner flip-box-front pattern"
        class:flip-it={showCardBack}
      >
        <div class="card-content center-align">
          <img alt="Atlanta NPU logo" src="./map_logo.png" width="300px" />
        </div>
      </div>

      <!-- BACK (NPU) -->
      <div
        class="card flip-box-back flip-box-inner"
        class:flip-it={!showCardBack}
      >
        <div class="cardBack">
          <div id="npuCard" class="card-content center-align" hidden>
            <h3>YOUR NPU IS:</h3>
            <a id="npuLink">
              <!-- svelte-ignore a11y-missing-content -->
              <h1 id="results" />
            </a>
            <br />
            <p><a href="/signup">Get 📧 Reminders</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: 'Tungsten-SemiBold';
    src: url(/fonts/Tungsten-Semibold.otf) format('opentype');
    letter-spacing: 2pt;
  }

  @font-face {
    font-family: 'GT-Eesti';
    src: url(/fonts/GT-Eesti-Display-Regular.otf) format('opentype');
  }

  .cardParent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55svh;
  }

  .card {
    scale: 1;
    transition: scale 0.5s ease-out;
  }

  .cardBack {
    /* background-color: white; */
    border: 10px solid #e0c300;
    /* border-radius: 7%; */
    /* clip-path: 50%; */
  }

  .card-content {
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 530px) {
    .input-field {
      margin-top: 60px;
    }
    .cardParent {
      height: 55svh;
    }
  }

  @media only screen and (max-width: 400px) {
    .card-content {
      width: 90svw;
      aspect-ratio: 1;
    }

    .cardParent {
      height: 50svh;
    }

    img {
      width: 80svw;
      /* aspect-ratio: 1; */
    }

    button {
      font-size: 0.8rem !important;
      padding: 0 10px;
    }
  }

  .card:hover {
    scale: 1.05;
    transition: scale 0.5s ease-out;
  }

  .pattern {
    background-color: #f5f5f5;
    background-image: linear-gradient(
      -45deg,
      #f5f5f5,
      #f5f5f5 50%,
      #e0c300 50%,
      #e0c300
    );
    background-size: 11px 11px;
    border: 10px solid whitesmoke;
  }

  #results {
    font-size: 10rem;
    color: #009395;
  }

  .row {
    margin-bottom: 10px !important;
  }

  #search {
    background-color: #009395;
  }

  #locate {
    background-color: #e0c300;
  }

  h1 {
    font-family: 'Tungsten-SemiBold';
    font-size: 11rem;
    margin: 0;
  }

  h2 {
    margin-block: 0;
    font-family: 'Gt-Eesti';
    font-size: 1.4rem;
  }

  h3 {
    margin-block: 0;
    font-family: 'Tungsten-SemiBold';
    font-size: 3.5rem;
  }

  p a {
    color: black;
    /* text-decoration: underline; */
    font-family: 'Gt-Eesti';
    font-size: 1.2rem;
    border-bottom: 1px solid #000;
    padding-bottom: 2px;
  }

  label,
  input,
  span {
    font-family: 'Gt-Eesti';
    font-size: 1.1rem;
    margin-top: 5px;
  }

  button {
    font-family: 'Gt-Eesti';
  }

  .input-field {
    transition: all 1s ease-in-out;
  }

  /* card-flip animation */
  .flip-it {
    transform: rotateY(-180deg);
  }

  .flip-box-inner {
    position: relative;
    text-align: center;
    transition: transform 1.5s;
    transform-style: preserve-3d;
  }

  .flip-box {
    background-color: transparent;
    /* perspective: 1000px; */
  }

  .flip-box-front,
  .flip-box-back {
    position: absolute;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }
</style>
