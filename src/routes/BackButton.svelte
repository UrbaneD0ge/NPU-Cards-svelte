<script>
  import { Router, Route, Link, useNavigate } from 'svelte-navigator';

  const navigate = useNavigate();
</script>

<Route>
  <button
    class="btn-flat waves-effect waves-grey center-align"
    on:click={() => navigate(-1)}>↩ Go Back</button
  >
</Route>
