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
	class={classMapUtil({
		[className as string]: true,
		toast: true
	})}
	style="background: var(--toast-color-{color}); color: var(--toast-color-on-{color}); {rest.style}"
	{...rest}
>
	{#if Icon}
		<Icon fill="var(--toast-color-on-${color})" height="20px" width="20px" />
	{/if}
	{message}
</div>

<style>
	:root {
		--toast-color-primary: var(--feflow-color-primary);
		--toast-color-on-primary: var(--feflow-color-on-primary);

		--toast-color-secondary: var(--feflow-color-secondary);
		--toast-color-on-secondary: var(--feflow-color-on-secondary);

		--toast-color-success: #a7eac1;
		--toast-color-on-success: #004422;

		--toast-color-error: #f9b1b1;
		--toast-color-on-error: #661111;

		--toast-color-info: #a7dffc;
		--toast-color-on-info: #003344;

		--toast-color-warning: #fde6b0;
		--toast-color-on-warning: #5a3d00;

		--toast-color-inherit: inherit;
		--toast-color-on-inherit: currentColor;
	}

	.toast {
		position: relative;
		background: var(--toast-color-primary);
		color: var(--toast-color-on-primary);
		padding: 0.5rem 1.25rem;
		border-radius: var(--feflow-radius-md);
		font-size: var(--feflow-size-md);
		font-weight: 500;
		box-shadow: var(--feflow-shadow-md), var(--feflow-shadow-lg);
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
