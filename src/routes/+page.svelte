<script>
  import Search from './Search.svelte';
  import Footer from './Footer.svelte';
  // import Nav from './Nav.svelte';
  // import Email from './Email.svelte';
</script>

<!-- <Nav /> -->

<div class="container">
  <h1>NPU LOCATOR</h1>
  <p>Search for your address below, or use your current location!</p>

  <Search />

  <!-- <NPU /> -->

  <!-- <Email /> -->
</div>

<Footer />

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

  h1 {
    font-family: 'Tungsten-SemiBold';
    font-size: 6rem;
    margin: 1svh 0 0 0;
  }

  p {
    margin-block: 0;
    font-family: 'Gt-Eesti';
    font-size: 1.4rem;
  }
</style>
