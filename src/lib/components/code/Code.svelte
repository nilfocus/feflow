<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import Window from "../window/index.js"
	import styles from "./Code.module.css"

	interface Props extends HTMLAttributes<HTMLDivElement> {}

	let { class: className = "", children, ...rest }: Props = $props()
</script>

<Window
	class={classMapUtil(className, [styles, className], styles.code)}
	{...rest}
>
	{@render children?.()}
</Window>
