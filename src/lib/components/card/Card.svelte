<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Card.module.css"
	import { glowOnHoverAction } from "../../actions/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		glowOnHover?: boolean
	}

	let {
		class: className = "",
		glowOnHover,
		children,
		...rest
	}: Props = $props()
</script>

{#snippet content()}
	<div
		{...rest}
		class={classMapUtil(className, [className, styles], styles.card)}
	>
		{@render children?.()}
	</div>
{/snippet}

{#if glowOnHover}
	<div use:glowOnHoverAction>
		{@render content()}
	</div>
{:else}
	{@render content()}
{/if}
