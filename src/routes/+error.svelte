<script>
  import { page } from '$app/stores';
</script>

<div class="container">
  <div id="FoF">
    <h2>Not the</h2>
    <br />
    <img src="404.png" alt="404 gold pendant" width="200px" />
    <h2>you were looking for.</h2>
  </div>
  <h4>Actually, {$page.status}: {$page.error.message}</h4>
</div>

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

  h2 {
    font-family: 'GT-Eesti';
  }

  h4 {
    font-family: 'GT-Eesti';
  }

  #FoF {
    margin-block: 10svh;
  }

  h2 {
    margin: 0;
    padding: 0;
    line-height: 90%;
  }

  img {
    filter: brightness(1.4);
  }
</style>
