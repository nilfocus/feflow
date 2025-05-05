<script lang="ts">
	import { ErrorIcon, InfoIcon, WarningIcon } from "../../icons/index.js"
	import { toastState } from "../../states/index.js"
	import type { ColorType, ToastType } from "../../types/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import { onDestroy, onMount, type Component } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props
		extends HTMLAttributes<HTMLDivElement>,
			Omit<ToastType, "id" | "color"> {
		color?: ColorType
	}

	let {
		class: className = "",
		message,
		color = "primary",
		duration = 3000,
		...rest
	}: Props = $props()

	let timer: NodeJS.Timeout

	const _toastState = toastState()

	const icons: Partial<Record<ColorType, Component>> = {
		error: ErrorIcon,
		info: InfoIcon,
		warning: WarningIcon
	}

	const Icon = icons[color] ?? InfoIcon

	onMount(() => {
		timer = setTimeout(() => {
			_toastState.clearWithDelay()
		}, duration)
	})

	onDestroy(() => {
		clearTimeout(timer)
	})
</script>

<div
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		toast: true
	})}
	style={`background: var(--color-${color}); color: var(--color-on-${color}); ${rest.style}`}
>
	{#if Icon}
		<Icon fill={`var(--color-on-${color})`} height="20px" width="20px" />
	{/if}
	{message}
</div>

<style>
	:root {
		--color-primary: var(--sc-color-primary);
		--color-on-primary: var(--sc-color-on-primary);

		--color-secondary: var(--sc-color-secondary);
		--color-on-secondary: var(--sc-color-on-secondary);

		--color-success: #a7eac1;
		--color-on-success: #004422;

		--color-error: #f9b1b1;
		--color-on-error: #661111;

		--color-info: #a7dffc;
		--color-on-info: #003344;

		--color-warning: #fde6b0;
		--color-on-warning: #5a3d00;

		--color-inherit: inherit;
		--color-on-inherit: currentColor;
	}

	.toast {
		position: relative;
		background: var(--color-primary);
		color: var(--color-on-primary);
		padding: 0.5rem 1.25rem;
		border-radius: 0.5rem;
		font-size: var(--sc-size-md);
		font-weight: 500;
		box-shadow:
			0 4px 12px rgba(0, 0, 0, 0.15),
			0 0 0 1px rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(6px);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-left: 4px solid currentColor;
		animation: fadeInUp 0.5s ease-out;
		transition: transform 0.3s ease-out;
		pointer-events: all;
	}

	.toast:hover {
		transform: scale(1.1);
	}

	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
