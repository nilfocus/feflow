<script lang="ts">
	import { Badge, Button } from "@/lib/index.js"

	let count = $state(0)

	function increment() {
		count++
	}

	function decrement() {
		count--
	}
</script>

<Badge size="lg">{count}</Badge>
<br />
<br />
<Button variant="outlined" onclick={decrement}>decrement (-)</Button>
<br />
<br />
<Button variant="contained" onclick={increment}>increment (+)</Button>
