<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import styles from "./Modal.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"
	import { fade, scale } from "svelte/transition"
	import Card from "../card/index.js"
	import type { Snippet } from "svelte"
	import { CloseIcon } from "../../icons/index.js"
	import Button from "../button/index.js"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		label: string | Snippet
		isOpen: boolean
		handleClose: () => void
	}

	let {
		class: className = "",
		label,
		isOpen,
		handleClose,
		children,
		...rest
	}: Props = $props()

	function handleBgClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			handleClose()
		}
	}
</script>

{#if isOpen}
	<div class={styles.overlay}></div>
	<div
		{...rest}
		class={classMapUtil({
			[className as string]: true,
			[styles.modal]: true
		})}
	>
		<div
			class={styles.bg}
			in:fade={{ duration: 300 }}
			out:fade={{ duration: 300 }}
			role="button"
			tabindex="0"
			onkeydown={(e) =>
				e.key === "Enter" || e.key === " " ? handleClose() : null}
			onclick={handleBgClick}
		>
			<div
				class={styles.wrapper}
				in:scale={{ duration: 300 }}
				out:scale={{ duration: 300 }}
			>
				<Card>
					<div class={styles.header}>
						{#if typeof label === "string"}
							<h2>{label}</h2>
						{:else}
							{@render label?.()}
						{/if}
						<Button variant="text" onclick={handleClose}>
							<CloseIcon />
						</Button>
					</div>
					<div class={styles.content}>
						{@render children?.()}
					</div>
				</Card>
			</div>
		</div>
	</div>
{/if}
