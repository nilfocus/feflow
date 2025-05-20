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
		<Badge class="bg-success text-on-success" size="xs" variant="contained">
			success
		</Badge>

		<Badge class="bg-error text-on-error" size="sm" variant="contained">
			error
		</Badge>

		<Badge class="bg-warning text-on-warning" size="md" variant="contained">
			warning
		</Badge>
		<Badge class="bg-warning text-on-warning" size="lg" variant="contained">
			warning
		</Badge>
		<Badge class="bg-warning text-on-warning" size="xl" variant="contained">
			warning
		</Badge>

		<Badge
			class="rounded-full bg-info text-on-info"
			size="lg"
			variant="contained"
		>
			999
		</Badge>

		<Badge
			class="rounded-full bg-info text-on-info"
			size="lg"
			variant="outlined"
		>
			888
		</Badge>

		<br />
		<br />

		<Badge class="bg-info text-on-info" size="lg" variant="contained">
			contained
		</Badge>

		<Badge class="bg-info text-on-info" size="lg" variant="outlined">
			outlined
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
