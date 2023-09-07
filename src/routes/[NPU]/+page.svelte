<script>
  export let data;

  $: ({ NPUs } = data);
</script>

<div id="cardParent" class="container">
  <br /><br />
  <div class="col">
    <div class="card">
      <h5 class="card-title center-align">Your NPU is:</h5>
      <h2 class="center-align">NPU-{NPUs.NPU}</h2>
      <div class="card-content">
        <p>
          Neighborhood Planning Unit: <strong>
            {NPUs.NPU}
          </strong>
        </p>
        <p>
          Chair: <strong>
            <a href="mailto:{NPUs.chairE}">
              {NPUs.chair}
            </a>
          </strong>
        </p>
        <p>
          Planner: <strong>
            <a href="mailto:{NPUs.plannerE}">
              {NPUs.planner}
            </a>
          </strong>
        </p>
        <p>
          Meeting Frequency: <strong>
            {NPUs.meeting.split(',')[0]} at
            {NPUs.meeting.split(',')[1]}
          </strong>
        </p>
        {#if NPUs.isHybrid === true}
          <p>
            Meeting Location: <strong>{NPUs.location}</strong>
          </p>
        {:else}
          <p>
            Meeting Location: <strong>Virtual</strong>
          </p>
        {/if}
      </div>
      <div class="card-action transparent text-darken-3">
        <a href={NPUs.ZoomURL} target="_blank" noopener noreferrer>Zoom Link</a>
        <br />
        <a href={NPUs.bylawsURL} target="_blank" noopener noreferrer
          >Bylaws Link</a
        >
      </div>
    </div>
  </div>
</div>
<footer class="center-align">
  <a href="/">↩ Go Back</a>
</footer>

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
    font-family: 'Tungsten-SemiBold';
    margin: 0;
    font-size: 6rem;
  }

  p,
  h5,
  a {
    font-family: 'GT-Eesti';
  }
  .card {
    padding: 10px;
    width: 400px;
    height: 400px;
  }

  #cardParent {
    /* margin: 3rem; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
</style>
