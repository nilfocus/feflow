<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./InputSearch.module.css"
	import Input from "../input/index.js"
	import type { ColorType, VariantType } from "../../types/index.js"
	import { SearchIcon } from "../../icons/index.js"

	interface Props extends Omit<HTMLInputAttributes, "type"> {
		variant?: VariantType
		color?: ColorType
	}

	let {
		class: className = "",
		variant = "text",
		color,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil(
		className,
		[styles, className],
		styles[variant],
		styles.inputSearch
	)}
>
	<span class={styles.searchIcon}>
		<SearchIcon />
	</span>
	<Input class={styles.inputGroup} {variant} {color} type="search" {...rest} />
</div>
