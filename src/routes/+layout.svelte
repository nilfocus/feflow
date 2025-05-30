<script lang="ts">
	import { InfoIcon } from "@/lib/icons/index.js"
	import {
		Button,
		customThemeConfig,
		Separator,
		themeMode,
		ThemeProvider,
		Toaster
	} from "@/lib/index.js"

	let { children } = $props()

	const { toggleThemeMode } = themeMode()

	const customTheme = customThemeConfig({
		colors: { light: { colorBg: "blue" }, dark: { colorPrimary: "yellow" } }
	})
</script>

<Toaster fullWidth />

<ThemeProvider {customTheme}>
	<div style="display:flex; justify-self: flex-end; padding: 1rem;">
		<Button onclick={toggleThemeMode}>
			<InfoIcon />
			Toggle Theme
		</Button>
	</div>
	<Separator />
	<br />
	{@render children()}
</ThemeProvider>
