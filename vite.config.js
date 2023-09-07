import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// necessary for svelte-navigator routing
	optimizeDeps: { exclude: ["svelte-navigator"] },
});
