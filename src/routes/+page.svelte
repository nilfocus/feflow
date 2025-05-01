<script lang="ts">
	import { Button, Utils } from "@/lib/index.js"
	const { toggleColorMode } = Utils.colorModeUtil()
</script>

<h1>Welcome</h1>

<Button onclick={toggleColorMode}>Toggle Theme</Button>
