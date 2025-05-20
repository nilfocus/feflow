<script lang="ts">
	import { Autocomplete } from "@/lib/index.js"

	const data = [
		{ id: 1, label: "Item 1" },
		{ id: 2, label: "Item 2" },
		{ id: 3, label: "Item 3" },
		{ id: 4, label: "Item 4" }
	]
</script>

<Autocomplete
	{data}
	filter={(item) => `${item.label}`}
	onSelect={(value) => {
		console.log(value)
	}}
/>
