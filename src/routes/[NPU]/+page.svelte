<script>
  export let data;

  $: ({ NPUs } = data);
</script>

<div id="cardParent" class="container">
  <div class="col">
    <div class="card">
      <div class="center-align">
        <h2>NPU-{NPUs.NPU}</h2>
        <h6>{NPUs.nhoods}</h6>
      </div>
      <div class="card-content">
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
      <div class="card-action transparent text-darken-3 center-align">
        <a href={NPUs.ZoomURL} target="_blank" noopener noreferrer>Zoom Link</a>
        <a href={NPUs.bylawsURL} target="_blank" noopener noreferrer
          >Bylaws Link</a
        >
      </div>
    </div>
  </div>
</div>
<div class="center-align">
  <a href="/">↩ Search</a> | <a href="/signup">Get 📧 Reminders</a>
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
    font-family: 'Tungsten-SemiBold';
    margin: 30px 0 0;
    font-size: 8rem;
  }

  h6 {
    font-family: 'GT-Eesti';
    margin: 5px 1svh;
    font-size: 0.8rem;
    text-wrap: balance;
  }

  p {
    font-size: 1.2rem;
  }

  p,
  a {
    font-family: 'GT-Eesti';
  }

  .card {
    padding: 10px;
    width: 450px;
    height: 450px;
    border: 4px solid #e0c300;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-action,
  .card-content {
    padding-block: 2px !important;
    margin: auto;
  }

  #cardParent {
    /* margin: 3rem; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    .card {
      width: 90svw;
    }
  }

  :global(body) {
    background-color: whitesmoke;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  :global(main) {
    flex: 1 0 auto;
  }
</style>
