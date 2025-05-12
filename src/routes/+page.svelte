<script lang="ts">
	import { InfoIcon } from "@/lib/icons/index.js"
	import { Button, themeMode } from "@/lib/index.js"

	const { toggleThemeMode } = themeMode()
</script>

<h1>activeThemeMode</h1>
<Button onclick={toggleThemeMode}>
	<InfoIcon />
	Toggle Theme
</Button>
