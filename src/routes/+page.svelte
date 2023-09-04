<script>
  import Search from './Search.svelte';
  import Nav from './Nav.svelte';
  // import Email from './Email.svelte';
</script>

<Nav />

<div class="container">
  <h1>NPU Locator</h1>
  <p>Search for your address below, or use your current location!</p>
  <p><a href="/viewall">View info for all NPUs..</a></p>

  <Search />

  <!-- <NPU /> -->

  <!-- <Email /> -->
</div>
