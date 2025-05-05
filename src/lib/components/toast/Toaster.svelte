<script lang="ts">
	import type { PositionType } from "../../types/index.js"
	import { toastState } from "../../states/index.js"
	import Toast from "./Toast.svelte"
	import { flip } from "svelte/animate"
	import { fade, fly } from "svelte/transition"
	import type { HTMLAttributes } from "svelte/elements"
	import { classMapUtil } from "../../utils/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		fullWidth?: boolean
	}

	let { class: className, fullWidth, ...rest }: Props = $props()

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
	<div
		{...rest}
		class={classMapUtil({
			[className as string]: true,
			["toaster"]: true,
			["fullWidth"]: fullWidth,
			["top"]: position.includes("top"),
			["bottom"]: position.includes("bottom")
		})}
		style={`${style} ${rest.style}`}
	>
		{#each data.toasts.filter((t) => t.position === position) as toast (toast.id)}
			<span
				animate:flip={{ duration: 200 }}
				in:fly={flyConfigs[position as PositionType] ?? { x: 0, y: 0 }}
				out:fade
			>
				<Toast
					{...toast}
					style={fullWidth ? "border: none; border-radius: 0;" : ""}
				/>
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

	.toaster.fullWidth {
		left: 0 !important;
		right: 0 !important;
		width: 100% !important;
		transform: none !important;
	}

	.toaster.fullWidth.top {
		top: 0 !important;
	}

	.toaster.fullWidth.bottom {
		bottom: 0 !important;
	}
</style>
