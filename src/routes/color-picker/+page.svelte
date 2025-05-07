<script lang="ts">
	import { ColorPicker } from "@/lib/index.js"

	let color = $state("#fde6b0")
</script>

<div style="display:flex; align-items:center; gap:1rem;">
	<ColorPicker
		value={color}
		oninput={(e) => {
			const input = e.currentTarget as HTMLInputElement
			color = input.value
		}}
	/>
	<div class="colorPreview" style="--color: {color}"></div>
	<span style="color: {color};">{color}</span>
</div>

<style>
	.colorPreview {
		width: 38px;
		height: 38px;
		border: 1px solid var(--feflow-color-border);
		border-radius: 5px;
		background: var(--color);
	}
</style>
