<script>
  import { npu } from '../stores.js';
  import { browser } from '$app/environment';
  import { enhance } from '$app/forms';

  npu.subscribe((value) => {
    if (browser) {
      document.querySelector('input[name="NPU"]').value = value;
    }
  });
</script>

<div class="row">
  <div class="col s12">
    We'll send the results to this email:
    <form action="?/sendEmail" method="POST" class="input-field" use:enhance>
      <input name="NPU" value={npu} type="text" hidden />
      <input name="email" id="email" type="email" class="validate" />
      <label for="email">Email</label>
      <span class="helper-text" data-error="Invalid" data-success="" />
      <button type="submit" class="btn">SUBMIT</button>
    </form>
  </div>
</div>
