<script lang="ts">
	import { InfoIcon } from "@/lib/icons/index.js"
	import {
		Actions,
		Button,
		getThemeConfig,
		themeModeUtil
	} from "@/lib/index.js"

	const { toggleThemeMode } = themeModeUtil()

	// const theme = $derived(getThemeConfig())
</script>

<h1>activeThemeMode</h1>
<!-- <p>colorBg: <strong>{theme.colorBg}</strong></p> -->
<Button onclick={toggleThemeMode}>
	<InfoIcon />
	Toggle Theme
</Button>

<!-- <div
	use:Actions.themeConfigAction={{
		callback: (vars) => {
			console.log(vars)
		}
	}}
></div> -->
