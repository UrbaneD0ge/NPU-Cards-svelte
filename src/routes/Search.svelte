<script>
  import Loader from '$lib/Loader.svelte';

  let isLoading = false;
  let neighborhood;
  let geoStatus = 'Find your location';
  let showCardBack = false;
  let placeName = 'Search by address below, or use your current location!';

  function geoLocate() {
    isLoading = true;
    showCardBack = false;
    placeName = 'Using GeoLocation <i class="material-icons">satellite_alt</i>';
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

  function URLencode(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16);
    });
  };

  function addySearch() {
    isLoading = true;
    // Get the location of the user and put address in the input field
    if (address.value == '') {
      geoStatus = 'Please enter an address';
      isLoading = false;
      return;
    }
    let addressEncoded = URLencode(address.value);
    // console.log(addressEncoded);
    let uriToFetch = `https://gis.atlantaga.gov/dpcd/rest/services/SiteAddressPoint/GeocodeServer/findAddressCandidates?Address=${addressEncoded}&City=Atlanta&matchOutOfRange=true&outSR=4326&f=pjson`;
    // https://gis.atlantaga.gov/dpcd/rest/services/SiteAddressPoint/GeocodeServer/findAddressCandidates?Address=1199+Merlin+Ave&Address2=&Address3=&Neighborhood=&City=Atlanta&Subregion=&Region=&Postal=&PostalExt=&CountryCode=&SingleLine=&outFields=&maxLocations=&matchOutOfRange=false&langCode=&locationType=&sourceCountry=&category=&location=&searchExtent=&outSR=&magicKey=&preferredLabelValues=&f=pjson
    // console.log(uriToFetch);
    fetch(uriToFetch)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let latitude = data.candidates[0]?.location.y;
        let longitude = data.candidates[0]?.location.x;
        if (data.candidates[0]) {
          // console.log(latitude, longitude);
          geoStatus = 'Location found!';
          placeName =
            '<i class="material-icons">location_on</i> ' + data.candidates[0].address.toUpperCase();
            // data[0].display_name.replace(/, Atlanta.*/gis, '');
          getNPU(latitude, longitude).catch((e) => console.error(e));
        } else {
          geoStatus = 'Not found.. Example: 123 Peachtree St NE';
          results.innerText = '🤔';
          npuLink.removeAttribute('href');
          isLoading = false;
        }
      });
  }

  async function getNPU(latitude, longitude) {
    let results = document.getElementById('results');
    let npuCard = document.getElementById('npuCard');
    let npuLink = document.getElementById('npuLink');
    address.value = '';
    fetch(
      `https://services5.arcgis.com/5RxyIIJ9boPdptdo/arcgis/rest/services/NeighborhoodsHosted/FeatureServer/0/query?outFields=NAME%2C+NPU&geometry=${longitude}%2C${latitude}%2C${longitude}%2C${latitude}&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&returnGeometry=false&outSR=4326&f=json`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if the response object contains no features, the location is not inside Atlanta city limits, otherwise success
        // TODO: Handle addresses in 'black holes' (not in any neighborhood, like Piedmont Park)
        if (data.features.length == 0) {
          fetch(
      `https://services5.arcgis.com/5RxyIIJ9boPdptdo/arcgis/rest/services/Official_NPU/FeatureServer/0/query?where=1%3D1&outFields=NAME&geometry=${longitude}%2C${latitude}%2C${longitude}%2C${latitude}&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&returnGeometry=false&outSR=4326&f=json`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('Fallback');
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
          let npu = data.features[0].attributes.NAME;
          neighborhood = '[No Official Neighborhood]';
          results.innerText = npu;
          npuCard.removeAttribute('hidden');
          npuLink.href = `/${npu}`;
          showCardBack = true;
        } catch {
          results.innerText = '🤔';
          npuCard.removeAttribute('hidden');
        }
      })
      .then(() => (isLoading = false));
        }
        try {
          let npu = data.features[0].attributes.NPU;
          neighborhood = data.features[0].attributes.NAME;
          results.innerText = npu;
          npuCard.removeAttribute('hidden');
          npuLink.href = `/${npu}`;
          showCardBack = true;
        } catch {
          results.innerText = '🤔';
          npuCard.removeAttribute('hidden');
        }
      })
      .then(() => (isLoading = false));
    return neighborhood;
  }

  // const toggleShowBack = () => (showCardBack = !showCardBack);

  function clearForm() {
    isLoading = false;
    showCardBack = false;
    // results.innerText = '';
    // npuCard.setAttribute('hidden', true);
    placeName = 'Search by address below, or use your current location!';
    geoStatus = 'Find your location';
  }
</script>

<div id="box">
  <div id="leftBox">
    <form class="col s12">
      <!-- Main helper text -->
      <!-- Search for your address below, or use your current location! -->
      <h2 style="position:absolute">
        {@html placeName}
      </h2>

      <!-- address bar -->
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
                id="search"
                ><i class="material-icons">home</i>
                Address Search
              </button>
            </div>
            <div class="col">
              <button
                on:click|preventDefault={geoLocate}
                class="btn m-2"
                id="locate"
                ><i class="material-icons">my_location</i> Locate Me</button
              >
            </div>
            <div class="col">
              {#if isLoading}
                <Loader />
              {/if}
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
  </div>
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
          <img alt="Atlanta NPU logo" src="./map_logo.png" />
        </div>
      </div>

      <!-- CARD BACK (NPU) -->
      <div
        class="card flip-box-back flip-box-inner"
        class:flip-it={!showCardBack}
      >
        <div class="cardBack">
          <div id="npuCard" class="card-content center-align" hidden>
            <a id="npuLink">
              <h3>YOUR NPU IS:</h3>
              <!-- svelte-ignore a11y-missing-content -->
              <h1 id="results" />
              <p>Click for more info!</p>
              <br />
              <p>Your Neighborhood is:</p>
              <h5>{neighborhood}</h5>
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

  i {
    font-size: 1.5rem;
    padding-right: 5px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cardParent {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 380px;
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

  @media only screen and (max-width: 900px) {
    .input-field {
      margin-top: 60px;
    }
  }

  @media only screen and (max-width: 400px) {
    .card-content {
      width: 90svw;
      height: 90svw;
      aspect-ratio: 1;
    }

    .cardParent {
      min-height: 100svw;
    }

    img {
      width: 80svw;
    }

    button {
      font-size: 0.8rem !important;
      padding: 0 10px;
    }

    #results {
      font-size: 8rem !important;
      line-height: 80% !important;
    }
  }

  @media only screen and (min-width: 1144px) {
    img {
      width: 400px;
    }

    #box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
    }

    #leftBox h2 {
      width: 46%;
      /* margin-bottom: 2rem; */
    }

    label,
    input,
    span {
      margin-top: 20px !important;
    }

    .card-content {
      width: 500px;
      height: 500px;
      align-items: center;
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
    margin-bottom: 0;
    line-height: 100%;
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
    color: black;
  }

  h5 {
    margin-block: 0;
    font-family: 'Gt-Eesti';
    font-size: 2rem;
    color: black;
  }

  a p {
    color: rgb(104, 104, 104);
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
    margin-top: 10px;
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
