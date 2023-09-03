import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index2.js";
const Search_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-12psz9g{width:200px}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let geoStatus = "Find your location";
  $$result.css.add(css);
  return `<div><form class="col s12"><div class="row m2"><br>
			<div class="input-field col s6"><input id="address" type="text" class="">
				<label for="Address">Address</label>
					<div class="row"><div class="col"><button class="btn green m-2">Address Search</button></div>
						<div class="col"><button class="btn blue m-2">🧭 Locate Me</button></div></div>
			<span id="geoStatus" class="helper-text" data-error="Can't get your location..">${escape(geoStatus)}</span></div></div></form>

	<div id="npuCard" class="row center-align" hidden><div class="col s3"><div class="card svelte-12psz9g"><div class="card-content"><p>Your NPU is:</p>
					<a id="npuLink"><h1 id="results">results go here</h1></a>
					<br></div></div></div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>NPU Locator</h1>
<p>Search for your address below, or use your current location!</p>



${validate_component(Search, "Search").$$render($$result, {}, {}, {})}

  

  `;
});
export {
  Page as default
};
