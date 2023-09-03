export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.8fbd5008.js","app":"_app/immutable/entry/app.02f732b6.js","imports":["_app/immutable/entry/start.8fbd5008.js","_app/immutable/chunks/index.6e417641.js","_app/immutable/chunks/singletons.d197f3b8.js","_app/immutable/chunks/paths.b6102627.js","_app/immutable/entry/app.02f732b6.js","_app/immutable/chunks/index.6e417641.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
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
				id: "/viewall",
				pattern: /^\/viewall\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[NPU]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"NPU","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
