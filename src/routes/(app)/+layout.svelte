<script lang="ts">
	import { customThemeConfig, ThemeProvider } from "@/lib/index.js"

	let { children } = $props()

	const customTheme = customThemeConfig({
		colors: { light: { colorBg: "blue" } }
	})
</script>

<ThemeProvider {customTheme} defaultMode="dark">
	{@render children()}
</ThemeProvider>
