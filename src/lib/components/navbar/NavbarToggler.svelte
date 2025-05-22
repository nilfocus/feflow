<script lang="ts">
	import { CloseIcon, MenuIcon } from "@/lib/icons/index.js"
	import type { HorizontalPositionType } from "../../types/index.js"
	import { classMapUtil } from "../../utils/index.js"
	import type { HTMLInputAttributes } from "svelte/elements"
	import styles from "./NavbarToggler.module.css"

	interface Props extends HTMLInputAttributes {
		align?: Exclude<HorizontalPositionType, "center">
	}

	let {
		class: className = "",
		align = "right",
		children,
		...rest
	}: Props = $props()
</script>

<div
	class={classMapUtil(className, [className, styles], styles.toggler)}
	style="--align: {align}"
>
	<input
		{...rest}
		class={styles.controller}
		type="checkbox"
		name={rest.id ?? "toggler"}
		id={rest.id ?? "toggler"}
	/>
	<label class={styles.container} for={rest.id ?? "toggler"}>
		<MenuIcon class={styles.menuIcon} />
		<CloseIcon class={styles.closeIcon} />
	</label>
</div>
