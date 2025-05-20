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

<div style="width: 500px; margin: 5rem auto;">
	<div style="padding: 1rem 0;">
		<Badge
			class="rounded-full bg-success text-on-success"
			size="lg"
			variant="contained"
		>
			success
		</Badge>

		<Badge
			class="rounded-full bg-error text-on-error"
			size="lg"
			variant="contained"
		>
			error
		</Badge>

		<Badge
			class="rounded-full bg-warning text-on-warning"
			size="lg"
			variant="contained"
		>
			warning
		</Badge>
	</div>

	<Badge
		class="rounded-full bg-warning text-on-warning"
		size="lg"
		variant="contained"
	>
		{count}
	</Badge>
	<br />
	<br />
	<Button disabled={count === 0} onclick={decrement}>decrement (-)</Button>
	<br />
	<br />
	<Button variant="contained" onclick={increment}>increment (+)</Button>
</div>
