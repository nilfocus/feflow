<script lang="ts">
	import { InfoIcon } from "@/lib/icons/index.js"
	import { Navbar, themeMode, Toaster } from "@/lib/index.js"

	let { children } = $props()

	const { toggleThemeMode } = themeMode()
</script>

<Toaster fullWidth />

<Navbar
	style="display: flex; align-items: center; justify-content: space-between;"
>
	<img alt="feflow" src="/logo.png" width="180px" height="50px" />
	<Navbar.Item onclick={toggleThemeMode}>
		<InfoIcon />
		Toggle Theme
	</Navbar.Item>
</Navbar>
{@render children()}
