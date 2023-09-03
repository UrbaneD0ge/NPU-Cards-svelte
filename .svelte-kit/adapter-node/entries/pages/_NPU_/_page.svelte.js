import { c as create_ssr_component, e as escape, f as add_attribute } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-11z9km9{margin:1rem}.card.svelte-11z9km9{padding:10px\r\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let NPUs;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ NPUs } = data);
  return `<div class="container"><br><br>
  <div class="col s6"><div class="card svelte-11z9km9"><h5 class="card-title center-align">Your NPU is:</h5>
      <h2 class="center-align svelte-11z9km9">NPU-${escape(NPUs.NPU)}</h2>
      <div class="card-content"><p>Neighborhood Planning Unit: <strong>${escape(NPUs.NPU)}</strong></p>
        <p>Chair: <strong><a href="${"mailto:" + escape(NPUs.chairE, true)}">${escape(NPUs.chair)}</a></strong></p>
        <p>Planner: <strong><a href="${"mailto:" + escape(NPUs.plannerE, true)}">${escape(NPUs.planner)}</a></strong></p>
        <p>Meeting Frequency: <strong>${escape(NPUs.meeting.split(",")[0])}</strong></p>
        <p>Meeting Location: <strong>???</strong></p>
        <p>Meeting Time: <strong>${escape(NPUs.meeting.split(",")[1])}</strong></p>
        <p>Meeting Location: <strong>???</strong></p></div>
      <div class="card-action text-darken-3"><a${add_attribute("href", NPUs.ZoomURL, 0)} target="_blank" noopener noreferrer>Zoom Link</a>
        <br>
        <a${add_attribute("href", NPUs.bylawsURL, 0)} target="_blank" noopener noreferrer>Bylaws Link</a></div></div></div></div>
<footer class="center-align"><a href="/">↩ Go Back</a>
</footer>`;
});
export {
  Page as default
};
