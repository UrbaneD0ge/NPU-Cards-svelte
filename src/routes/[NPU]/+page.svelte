<div class="container">
  <br><br>
  <div class="col s6">
    <div class="card">
      <h5 class="card-title center-align">Your NPU is:</h5>
      <h2 class="center-align">NPU-{NPUs.NPU}</h2>
      <div class="card-content">
        <p>Neighborhood Planning Unit: <strong>
          {NPUs.NPU}
          </strong></p>
        <p>Chair: <strong>
          <a href="mailto:{NPUs.chairE}">
            {NPUs.chair}
          </a>
          </strong></p>
        <p>Planner: <strong>
          <a href="mailto:{NPUs.plannerE}">
            {NPUs.planner}
          </a>
          </strong></p>
        <p>Meeting Frequency: <strong>
            {NPUs.meeting.split(',')[0]}
          </strong></p>
        <p>Meeting Location: <strong>???</strong></p>
        <p>Meeting Time: <strong>
          {NPUs.meeting.split(',')[1]}
          </strong></p>
        <p>Meeting Location: <strong>???</strong></p>
      </div>
      <div class="card-action text-darken-3">
        <a href="{NPUs.ZoomURL}" target='_blank' noopener noreferrer>Zoom Link</a>
        <br>
        <a href="{NPUs.bylawsURL}" target='_blank' noopener noreferrer>Bylaws Link</a>
      </div>
    </div>
  </div>
</div>

<script>
  // export let NPUs
  export let data;

$: ({NPUs} = data);
</script>

<style>
h2 {
  margin: 1rem;
}

.card {
  padding: 10px
}
</style>