<script lang="ts">
	import type { SizeType } from "../../types/index.js"
	import styles from "./Switch.module.css"
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"

	interface Props extends Omit<Omit<HTMLInputAttributes, "size">, "type"> {
		size?: SizeType
	}

	let { class: className = "", size = "sm", ...rest }: Props = $props()
</script>

<div class={styles.switch}>
	<label
		class={classMapUtil({
			[className as string]: true,
			[styles.content]: true,
			[`text-${size}`]: true
		})}
	>
		<input type="checkbox" {...rest} />
		<span class={styles.slider}></span>
	</label>
	{rest["aria-label"]}
</div>
