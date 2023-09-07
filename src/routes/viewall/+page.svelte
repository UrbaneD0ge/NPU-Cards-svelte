<script>
  export let data;

  $: ({ NPUs } = data);
</script>

<div class="container">
  <h1>NEIGHBORHOOD PLANNING UNITS</h1>
</div>

<div id="card-container">
  {#each NPUs as unit}
    <div class="card col-2">
      <h2 class="center-align"><a href="/{unit.NPU}">NPU-{unit.NPU}</a></h2>
      <div class="card-content">
        <p>
          Chair: <strong>
            <a href="mailto:{unit.chairE}">
              {unit.chair}
            </a>
          </strong>
        </p>
        <p>
          Planner: <strong>
            <a href="mailto:{unit.plannerE}">
              {unit.planner}
            </a>
          </strong>
        </p>
        <p>
          Meeting Frequency: <strong>
            {unit.meeting.split(',')[0]} at
            {unit.meeting.split(',')[1]}
          </strong>
        </p>
        {#if unit.isHybrid === true}
          <p>
            Meeting Location: <strong>{unit.location}</strong>
          </p>
        {:else}
          <p>
            Meeting Location: <strong>Virtual</strong>
          </p>
        {/if}
      </div>
      <div class="card-action text-darken-3">
        <a href={unit.ZoomURL} target="_blank" noopener noreferrer>Zoom Link</a>
        <br />
        <a href={unit.bylawsURL} target="_blank" noopener noreferrer
          >Bylaws Link</a
        >
      </div>
    </div>
  {/each}
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

  h2 {
    margin: 2rem 2rem 0 2rem;
  }

  h2 a {
    font-size: 5rem;
    color: black;
    margin: 0 !important;
  }

  h1,
  h2 a {
    font-family: 'Tungsten-SemiBold';
  }

  p {
    font-family: 'GT-Eesti';
  }

  .card {
    width: 20svw;
    min-width: 2.8in;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    scale: 1;
    transition: scale 0.5s ease-out;
  }

  .card:hover {
    scale: 1.05;
    transition: scale 0.5s ease-out;
  }

  #card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
</style>
