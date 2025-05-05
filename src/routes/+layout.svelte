<script lang="ts">
	import { ThemeProvider, Toaster } from "@/lib/index.js"
	import "./globals.css"

	let { children } = $props()
</script>

<Toaster fullWidth />

<ThemeProvider>
	{@render children()}
</ThemeProvider>
