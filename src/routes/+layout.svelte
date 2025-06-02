<script lang="ts">
	import { InfoIcon } from "@/lib/icons/index.js"
	import {
		customThemeConfig,
		Navbar,
		themeMode,
		ThemeProvider,
		Toaster
	} from "@/lib/index.js"

	let { children } = $props()

	const { toggleThemeMode } = themeMode()

	const customTheme = customThemeConfig({
		colors: { light: { colorBg: "blue" } }
	})
</script>

<Toaster fullWidth />

<ThemeProvider {customTheme}>
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
</ThemeProvider>
