<script lang="ts">
	import {
		Button,
		Code,
		getThemeConfig,
		themeMode,
		Window
	} from "@/lib/index.js"

	const theme = $derived(getThemeConfig())

	const { toggleThemeMode } = themeMode()
</script>

<div style="width: 500px; margin: 3rem auto;">
	<p>
		for the theme to work you must place the <strong>theme provider</strong> component
		under the layout
	</p>
	<br />

	<Window>
		<Code>
			{@const codeString = `
			<script lang="ts">
				import { customThemeConfig, ThemeProvider } from "@/lib/index.js"
				
				let { children } = $props()
			
				const customTheme = customThemeConfig({
					colors: { light: { colorBg: "orange" } }
				})
			</script>
			
			<ThemeProvider {customTheme} defaultMode="dark">
				{@render children()}
			</ThemeProvider>
			`
				.trim()
				.split("\n")}

			{#each codeString as line, i}
				<pre data-prefix={i}><code>{line.trim()}</code></pre>
			{/each}
		</Code>
	</Window>

	<br />

	<ul>
		{#each Object.keys(theme) as t}
			{@const color = theme[t as keyof typeof theme]}
			<li>{t}: <span style="color: {color};">{color}</span></li>
		{/each}
	</ul>
	<br />
	<Button variant="outlined" onclick={toggleThemeMode}>toggle theme</Button>
</div>
