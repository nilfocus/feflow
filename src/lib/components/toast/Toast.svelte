<script lang="ts">
	import { ErrorIcon, InfoIcon, WarningIcon } from "../../icons/index.js"
	import { toastState } from "../../states/index.js"
	import type { StatusColorType, ToastType } from "../../types/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
	import { onDestroy, onMount } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props
		extends HTMLAttributes<HTMLDivElement>,
			Omit<ToastType, "id" | "color"> {
		color?: StatusColorType | "primary"
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

	const Icon = {
		error: ErrorIcon,
		info: InfoIcon,
		warning: WarningIcon,
		success: InfoIcon,
		primary: InfoIcon
	}[color]

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
	{...rest}
	style="--bg-color: var(--feflow-color-{color}); --color: var(--feflow-color-on-{color}); {rest.style}"
>
	{#if Icon}
		<Icon fill="var(--color)" height="20px" width="20px" />
	{/if}
	{message}
</div>

<style>
	.toast {
		position: relative;
		background: var(--bg-color);
		color: var(--color);
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
		transform: scale(1.01);
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
