<svelte:head>
  <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDY9gzpWCprcXyaZ5IHXvTZGhAlenx-d4g&callback=initMap&libraries=maps,marker&v=beta"/>
</svelte:head>

<div id="map">
    <gmp-map center="33.75,-84.34" zoom="10" map-id="DEMO_MAP_ID"></gmp-map>
</div>

<style>
  div {
    border: 1px black solid;
    margin: 5px;
    padding: 5px;
    /* background-color: paleturquoise; */
  }

  #map {
    height: 400px
  }
</style>