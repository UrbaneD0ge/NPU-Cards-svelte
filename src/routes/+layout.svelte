<script>
  import { page } from '$app/stores';
</script>

<nav class="navbar-fixed nav-wrapper black">
  <a href="/" class="brand-logo left">NPU LOCATOR</a>
  <ul class="right">
    {#if $page.route.id !== '/viewall'}
      <li><a href="/viewall">View All NPUs</a></li>
    {/if}
  </ul>
</nav>

<slot />

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

  nav {
    padding-inline: 20px;
  }

  a {
    font-family: 'Tungsten-SemiBold';
  }

  li a {
    font-family: 'GT-Eesti';
  }
</style>
