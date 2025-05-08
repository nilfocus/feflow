<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./CustomLink.module.css"

	interface Props extends HTMLAnchorAttributes {
		class?: string | (({ isActive }: { isActive: boolean }) => string)
		pathname: string
		hoverUnderline?: "left" | "center" | "right"
	}

	let {
		class: className = "",
		pathname,
		hoverUnderline,
		children,
		...rest
	}: Props = $props()

	const isActive = $derived(pathname === rest.href)
	console.log(Boolean(hoverUnderline))
</script>

<a
	class={classMapUtil({
		[typeof className === "function" ? className({ isActive }) : className]:
			true,
		[styles.customLink]: true,
		[styles.customLinkUnderline]: Boolean(hoverUnderline),
		[styles[hoverUnderline!]]: Boolean(hoverUnderline)
	})}
	aria-current={isActive ? "page" : undefined}
	{...rest}
>
	{@render children?.()}
</a>
