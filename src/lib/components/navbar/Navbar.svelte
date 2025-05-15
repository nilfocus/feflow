<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./Navbar.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<div
	class={classMapUtil(className, [styles, className], styles.navbar)}
	{...rest}
>
	{@render children?.()}
</div>
