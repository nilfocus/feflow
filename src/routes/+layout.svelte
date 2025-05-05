<script lang="ts">
	import { ThemeProvider, Toaster } from "@/lib/index.js"
	import "./globals.css"

	let { children } = $props()
</script>

<Toaster fullWidth />

<ThemeProvider
	theme={{
		colors: {
			light: {
				colorPrimary: "red",
				colorBg: "green"
			},
			dark: {
				colorPrimary: "blue",
				colorBg: "black"
			}
		}
	}}
>
	{@render children()}
</ThemeProvider>
