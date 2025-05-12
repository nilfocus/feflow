<script lang="ts">
	import { customThemeConfig, ThemeProvider, Toaster } from "@/lib/index.js"

	let { children } = $props()

	const customTheme = customThemeConfig({
		colors: { light: { colorBg: "gray" }, dark: { colorPrimary: "yellow" } }
	})
</script>

<Toaster fullWidth />

<ThemeProvider {customTheme}>
	{@render children()}
</ThemeProvider>
