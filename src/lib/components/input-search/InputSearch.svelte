<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./InputSearch.module.css"
	import Input from "../input/index.js"
	import type {
		ActionEntryType,
		ColorType,
		VariantType
	} from "../../types/index.js"
	import { SearchIcon } from "../../icons/index.js"

	interface Props extends Omit<HTMLInputAttributes, "type"> {
		variant?: VariantType
		color?: ColorType
		actions?: ActionEntryType<HTMLElement>[]
	}

	let {
		class: className = "",
		variant = "text",
		color,
		actions,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		styles[variant],
		styles.inputSearch
	)}
>
	<span class={styles.searchIcon}>
		<SearchIcon />
	</span>
	<Input
		{...rest}
		class={styles.inputGroup}
		{actions}
		{variant}
		{color}
		type="search"
	/>
</div>
