import { c as create_ssr_component, d as each, e as escape } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { units } = $$props;
  if ($$props.units === void 0 && $$bindings.units && units !== void 0)
    $$bindings.units(units);
  return `<h1>View All NPUs</h1>

${each(units, (npu) => {
    return `<div class="npu"><h2>${escape(npu.npu)}</h2>
    <p>${escape(npu.name)}</p>
    <p>${escape(npu.address)}</p>
    <p>${escape(npu.phone)}</p>
    <p>${escape(npu.email)}</p>
    <p>${escape(npu.website)}</p>
  </div>`;
  })}`;
});
export {
  Page as default
};
