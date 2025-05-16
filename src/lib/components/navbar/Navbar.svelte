<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Navbar.module.css"
	import type { Snippet } from "svelte"

	interface Props
		extends Omit<HTMLAttributes<HTMLDivElement>, "children">,
			Partial<{
				start: Snippet<[]>
				center: Snippet<[]>
				end: Snippet<[]>
			}> {}

	let { class: className = "", start, center, end, ...rest }: Props = $props()
</script>

<div
	class={classMapUtil(className, [styles, className], styles.navbar)}
	{...rest}
>
	{#if start}
		<div class={styles.start}>
			{@render start?.()}
		</div>
	{/if}
	{#if center}
		<div class={styles.center}>
			{@render center?.()}
		</div>
	{/if}
	{#if end}
		<div class={styles.end}>
			{@render end?.()}
		</div>
	{/if}
</div>
