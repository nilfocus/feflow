<script lang="ts">
	import type { HTMLImgAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Avatar.module.css"

	interface Props extends HTMLImgAttributes {
		textFallback?: string
	}

	let { class: className = "", textFallback, ...rest }: Props = $props()

	let hasError = $state(false)

	function handleError() {
		hasError = true
	}
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles.avatar]: true
	})}
>
	{#if !hasError && rest.src}
		<img onerror={handleError} {...rest} />
	{:else if textFallback}
		<span class={styles.textFallback}>
			{textFallback.charAt(0).toUpperCase()}
		</span>
	{/if}
</div>
