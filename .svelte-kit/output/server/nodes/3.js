import * as server from '../entries/pages/_NPU_/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/_NPU_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[NPU]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.c5511e6f.js","_app/immutable/chunks/index.c5ca82e2.js"];
export const stylesheets = ["_app/immutable/assets/3.a2ac2752.css"];
export const fonts = [];
