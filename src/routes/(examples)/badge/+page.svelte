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

<Badge
	class="rounded-full bg-warning text-on-warning"
	size="lg"
	variant="contained"
>
	{count}
</Badge>
<br />
<br />
<Button onclick={decrement}>decrement (-)</Button>
<br />
<br />
<Button variant="contained" onclick={increment}>increment (+)</Button>
