export const manifest = {
	appDir: "_app",
	appPath: "NPU-Cards-svelte/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7d0c0733.js","app":"_app/immutable/entry/app.e120c661.js","imports":["_app/immutable/entry/start.7d0c0733.js","_app/immutable/chunks/index.c5ca82e2.js","_app/immutable/chunks/singletons.756c0821.js","_app/immutable/chunks/paths.8d2e3aac.js","_app/immutable/entry/app.e120c661.js","_app/immutable/chunks/index.c5ca82e2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[NPU]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"NPU","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
