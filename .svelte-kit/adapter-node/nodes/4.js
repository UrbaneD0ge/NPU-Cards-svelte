import * as server from '../entries/pages/_NPU_/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/_NPU_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[NPU]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.00bcd923.js","_app/immutable/chunks/index.6e417641.js"];
export const stylesheets = ["_app/immutable/assets/4.a2ac2752.css"];
export const fonts = [];
