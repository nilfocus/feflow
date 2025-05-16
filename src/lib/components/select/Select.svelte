<script lang="ts">
	import type { HTMLSelectAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Select.module.css"

	interface Props extends HTMLSelectAttributes {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div class={classMapUtil(className, [styles, className], styles.select)}>
	<select {...rest}>
		{@render children?.()}
	</select>
</div>
