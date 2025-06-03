<script lang="ts">
	import { Button, getThemeConfig, themeMode } from "@/lib/index.js"

	const theme = $derived(getThemeConfig())

	const { toggleThemeMode } = themeMode()
</script>

<div style="width: 500px; margin: 3rem auto;">
	<p>
		for the theme to work you must place the <strong>theme provider</strong> component
		under the layout
	</p>
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
