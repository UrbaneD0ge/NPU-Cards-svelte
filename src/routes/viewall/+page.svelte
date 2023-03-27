<script>
  export let units;

// $: ({units} = npus )
</script>

<h1>View All NPUs</h1>

{#each units as npu}
  <div class="npu">
    <h2>{npu.npu}</h2>
    <p>{npu.name}</p>
    <p>{npu.address}</p>
    <p>{npu.phone}</p>
    <p>{npu.email}</p>
    <p>{npu.website}</p>
  </div>
{/each}
