<script>
  import { npu } from '../stores.js';
  import { browser } from '$app/environment';

  npu.subscribe((value) => {
    if (browser) {
      document.querySelector('input[name="NPU"]').value = value;
    }
  });
</script>

<div class="row">
  <div class="col s12">
    We'll send the results to this email:
    <input type="text" name="NPU" value={npu} disabled />
    <form class="input-field">
      <input id="email_inline" type="email" class="validate" />
      <label for="email_inline">Email</label>
      <span class="helper-text" data-error="Invalid" data-success="" />
      <button action="?/sendEmail" type="submit" class="btn">SUBMIT</button>
    </form>
  </div>
</div>
