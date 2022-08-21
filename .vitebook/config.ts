import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { preactPlugin } from '@vitebook/preact/node';
import { defaultThemePlugin, DefaultThemeConfig } from '@vitebook/theme-default/node';

export default defineConfig<DefaultThemeConfig>({
	include: ["src/**/*.story.{jsx,tsx}"],
	plugins: [preactPlugin({
    appFile: "App.tsx",
  }), clientPlugin(), defaultThemePlugin()],
	site: {
		title: "Portfolio",
		description: "",
		theme: {}
	},
	// vite: {
	// 	esbuild: {
	// 		logOverride: { "this-is-undefined-in-esm": "silent" }
	// 	},
	// 	optimizeDeps: {
	// 		include: ["@emotion/react", "hoist-non-react-statics"]
	// 	}
	// }
});
