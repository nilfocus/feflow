<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./ProgressLoader.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		progress: number
	}

	let { class: className = "", progress, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class={classMapUtil({
		[className as string]: true,
		[styles.progressLoader]: true
	})}
>
	<div class={styles.progress} style="width: {progress}%;"></div>
</div>
