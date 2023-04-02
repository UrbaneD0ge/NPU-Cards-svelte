<div class="row">
  <div class="col s12">
    <div class="card">
      <h2>NPU-{NPUs.npu}</h2>
      <div class="card-content">
        <h5 class="card-title">NPU-{NPUs.NPU}
        </h5>
        <p>Neighborhood Planning Unit: <strong>
          {NPUs.NPU}
          </strong></p>
        <p>Chair: <strong>
          {NPUs.chair}
          </strong></p>
        <p>Meeting Frequency: <strong>
            <!-- {NPUs.meeting.split(',')[0]} -->
          </strong></p>
        <p>Meeting Location: <strong>Virtual</strong></p>
        <p>Meeting Time: <strong>
          <!-- {NPUs.meeting.split(',')[1]} -->
          </strong></p>
        <p>Meeting Location: <strong>physical location</strong></p>
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
  export let data
$: NPUs = data
</script>