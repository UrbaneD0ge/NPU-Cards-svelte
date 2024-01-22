<script>
  import Search from './Search.svelte';
</script>

<div class="container">
  <h1>NPU LOCATOR</h1>
  <Search />
</div>

<style>
  @font-face {
    font-family: 'Tungsten-SemiBold';
    src: url(/fonts/Tungsten-Semibold.otf) format('opentype');
    letter-spacing: 2pt;
  }

  h1 {
    font-family: 'Tungsten-SemiBold';
    font-size: 5rem;
    margin: 1svh 0 0 0;
  }

  @media only screen and (min-width: 1024px) {
    .container {
      width: 66%;
      margin: 0 5svw;
    }
  }
</style>
