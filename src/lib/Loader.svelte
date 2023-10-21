<script>
  import { fade } from 'svelte/transition';
</script>

<div class="loader" transition:fade />

<style>
  .loader {
    border: 5px solid #e0c300;
    border-top: 5px solid #f3f3f3;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    animation: spin 1s linear infinite;
    margin: 5px;
    box-sizing: content-box;
    position: static;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
