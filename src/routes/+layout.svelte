<script lang="ts">
	import { Toaster } from "@/lib/index.js"
	import "./globals.css"

	let { children } = $props()
</script>

<Toaster />

{@render children()}
