<script>
  import Search from './Search.svelte';
  import Email from './Email.svelte';
</script>

<div class="container">
  <h1>NPU LOCATOR</h1>

  <Search />

  <Email />
</div>

<style>
  @font-face {
    font-family: 'Tungsten-SemiBold';
    src: url(/fonts/Tungsten-Semibold.otf) format('opentype');
    letter-spacing: 2pt;
  }

  h1 {
    font-family: 'Tungsten-SemiBold';
    font-size: 6rem;
    margin: 1svh 0 0 0;
  }
</style>
