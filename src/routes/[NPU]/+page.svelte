<div class="row">
  <div class="col s12">
    <div class="card">
      <h5 class="card-title center-align">Your NPU is:</h5>
      <h2 class="center-align">NPU-{NPUs.NPU}</h2>
      <div class="card-content">
        <p>Neighborhood Planning Unit: <strong>
          {NPUs.NPU}
          </strong></p>
        <p>Chair: <strong>
          {NPUs.chair}
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
      <div class="card-action">
        <a href="mailto:{NPUs.chairE}">
          {NPUs.chairE}
        </a><br>
        <a href="{NPUs.ZoomURL}" target='_blank' noopener noreferrer>Zoom Link</a>
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
  .card {
    width: 600px;
  }
</style>