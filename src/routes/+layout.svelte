<script lang="ts">
	import { ThemeProvider, Toaster } from "@/lib/index.js"

	let { children } = $props()
</script>

<Toaster fullWidth />

<ThemeProvider
	customTheme={{
		colors: {
			light: { colorBg: "green" },
			dark: {
				colorBg: "blue"
			}
		}
	}}
>
	{@render children()}
</ThemeProvider>
