<script lang="ts">
	import { Autocomplete, Button } from "@/lib/index.js"

	const data = Array.from(Array(30)).map((_, i) => ({
		id: i,
		label: `Item ${i}`
	}))
</script>

<Autocomplete
	{data}
	filter={(item) => `${item.label}`}
	onSelect={(value) => {
		console.log(value)
	}}
>
	{#snippet renderInput({ id, label }, clear)}
		<Button
			variant="text"
			onclick={() => {
				console.log({ id, label })
				clear()
			}}
		>
			{label}
		</Button>
	{/snippet}
</Autocomplete>
