import * as server from '../entries/pages/viewall/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/viewall/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/viewall/+page.server.js";
export const imports = ["_app/immutable/nodes/3.04f7b84b.js","_app/immutable/chunks/index.6e417641.js"];
export const stylesheets = [];
export const fonts = [];
