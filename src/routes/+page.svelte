<script lang="ts">
	import { Button, Utils } from "@/lib/index.js"

	const { toggleColorMode } = Utils.themeUtil()
</script>

<h1>Welcome</h1>

<Button onclick={toggleColorMode}>Toggle Theme</Button>
