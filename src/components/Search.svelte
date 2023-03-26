<script>

</script>

  <div>
    <form class="col s12">
      <div class="row m2">
        <br>
        <div class="input-field col s6">
          <input id="address" type="text" class="">
          <label for="Address">Address</label>
          <button id="addySearch" class="btn green">Address Search</button>
          <button id="geo" class="btn blue">🧭 Locate Me</button>
          <span id="status" class="helper-text" data-error="Can't get your location.." data-success=""></span>
        </div>
      </div>
    </form>

    <div id='npuCard' class='row center-align' hidden>
      <div class='col s3'>
        <div class="card">
          <div class="card-content">
            <p>Your NPU is:</p>
            <a id='npuLink'>
              <h1 id='results'></h1>
            </a>
            <br>
          </div>
        </div>
      </div>
    </div>
  </div>