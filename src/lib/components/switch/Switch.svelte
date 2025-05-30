<script lang="ts">
	import type { SizeType } from "../../types/index.js"
	import styles from "./Switch.module.css"
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { Snippet } from "svelte"

	interface Props extends Omit<Omit<HTMLInputAttributes, "size">, "type"> {
		size?: SizeType
		label?: string | Snippet<[]>
	}

	let { class: className = "", size = "sm", label, ...rest }: Props = $props()
</script>

<div class={styles.switch}>
	<label
		class={classMapUtil(
			className,
			[className, styles],
			styles.content,
			styles[size]
		)}
	>
		<input {...rest} type="checkbox" hidden />
		<span class={styles.slider}></span>
	</label>
	{#if typeof label === "string"}
		{label}
	{:else}
		{@render label?.()}
	{/if}
</div>
