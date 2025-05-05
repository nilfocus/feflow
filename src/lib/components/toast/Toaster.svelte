<script lang="ts">
	import type { PositionType } from "../../types/index.js"
	import { toastState } from "../../states/index.js"
	import Toast from "./Toast.svelte"
	import { flip } from "svelte/animate"
	import { fade, fly } from "svelte/transition"

	const { data } = toastState()

	const positionStyles: Record<PositionType, string> = {
		"top-left": "top: 20px; left: 20px;",
		"top-right": "top: 20px; right: 20px;",
		"bottom-left": "bottom: 20px; left: 20px;",
		"bottom-right": "bottom: 20px; right: 20px;",
		"top-center": "top: 20px; left: 50%; transform: translateX(-50%);",
		"bottom-center": "bottom: 20px; left: 50%; transform: translateX(-50%);"
	}

	const flyConfigs: Record<PositionType, { x: number; y: number }> = {
		"top-left": { x: -256, y: 0 },
		"top-right": { x: 256, y: 0 },
		"bottom-left": { x: -256, y: 0 },
		"bottom-right": { x: 256, y: 0 },
		"top-center": { x: 0, y: -256 },
		"bottom-center": { x: 0, y: 256 }
	}
</script>

{#each Object.entries(positionStyles) as [position, style] (position)}
	<div class="toaster" {style}>
		{#each data.toasts.filter((t) => t.position === position) as toast (toast.id)}
			<span
				animate:flip={{ duration: 200 }}
				in:fly={flyConfigs[position as PositionType] ?? { x: 0, y: 0 }}
				out:fade
			>
				<Toast {...toast} />
			</span>
		{/each}
	</div>
{/each}

<style>
	.toaster {
		position: fixed;
		z-index: 1000;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		pointer-events: none;
	}
</style>
