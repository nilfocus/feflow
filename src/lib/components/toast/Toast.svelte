<script lang="ts">
	import { ErrorIcon, InfoIcon, WarningIcon } from "../../icons/index.js"
	import type { StatusColorType, ToastType } from "../../types/index.js"
	import classMapUtil from "../../utils/classMapUtil.js"
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

	const Icon = {
		error: ErrorIcon,
		info: InfoIcon,
		warning: WarningIcon,
		success: InfoIcon,
		primary: InfoIcon
	}[color]
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		toast: true
	})}
	{...rest}
	style="--bg-color: var(--color-{color}); --color: var(--color-on-{color}); {rest.style}"
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
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 500;
		box-shadow:
			0 4px 6px rgba(0, 0, 0, 0.1),
			0 10px 15px rgba(0, 0, 0, 0.15);
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
