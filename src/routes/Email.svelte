<script>
  // get the value of NPU from Search component
  // and set it to the hidden input field
  // so that we can send it to the server
  // when the user submits the form
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  // import { npu } from './Search.svelte';
  // onMount(() => {
  //   document.querySelector('input[name="NPU"]').value = get(NPU);
  // });
  export let npu;
</script>

<div class="row">
  <div class="col s12">
    We'll send the results to this email:
    <input type="text" name="NPU" value="NPU: {$npu}" disabled />
    <form class="input-field">
      <input id="email_inline" type="email" class="validate" />
      <label for="email_inline">Email</label>
      <span class="helper-text" data-error="Invalid" data-success="" />
      <button type="submit" class="btn">SUBMIT</button>
    </form>
  </div>
</div>
