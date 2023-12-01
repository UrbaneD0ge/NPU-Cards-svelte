<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Footer from './Footer.svelte';

  onMount(() => {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, { edge: 'right' });
  });
</script>

<nav class="navbar-fixed nav-wrapper black">
  <a href="/" class="brand-logo left">NPU LOCATOR</a>
  <a href="#" data-target="mobile-demo" class="right sidenav-trigger"
    ><i class="material-icons">menu</i></a
  >
  <ul class="navItems hide-on-med-and-down">
    {#if $page.route.id !== '/whatis'}
      <li><a href="/whatis">What's an NPU?</a></li>
    {/if}
    {#if $page.route.id !== '/viewall'}
      <li><a href="/viewall">View All NPUs</a></li>
    {/if}
    {#if $page.route.id !== '/signup'}
      <li><a href="/signup">Email Reminders</a></li>
    {/if}
  </ul>
</nav>
<ul class="sidenav sidenav-close" id="mobile-demo">
  {#if $page.route.id !== '/'}
    <li><a href="/">NPU Locator</a></li>
  {/if}
  {#if $page.route.id !== '/whatis'}
    <li><a href="/whatis">What's an NPU?</a></li>
  {/if}
  {#if $page.route.id !== '/viewall'}
    <li><a href="/viewall">View All NPUs</a></li>
  {/if}
  {#if $page.route.id !== '/signup'}
    <li><a href="/signup">Email Reminders</a></li>
  {/if}
</ul>

<slot />

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

  nav {
    padding-inline: 20px;
  }

  .navItems {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    font-family: 'Tungsten-SemiBold';
  }

  li a {
    font-family: 'GT-Eesti';
  }

  :global(footer) {
    position: sticky;
    top: 100vh;
  }

  :global(html, main, body) {
    min-height: 95svh;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
</style>
