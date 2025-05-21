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
	class={classMapUtil(className, [className, styles], styles.progressLoader)}
	{...rest}
>
	<div class={styles.progress} style="width: {progress}%;"></div>
</div>
