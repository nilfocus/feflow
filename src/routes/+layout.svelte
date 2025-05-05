<script lang="ts">
	import { ThemeProvider, Toaster } from "@/lib/index.js"
	import "./globals.css"

	let { children } = $props()
</script>

<Toaster fullWidth />

<ThemeProvider theme={{ colors: { colorPrimary: "red", colorBg: "green" } }}>
	{@render children()}
</ThemeProvider>
