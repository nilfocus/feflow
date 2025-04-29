<script lang="ts">
	import type { SectionType } from "../../types/index.js"
	import Button from "../button/index.js"
	import styles from "./ScrollSection.module.css"
	import classMapUtil from "../../utils/classMapUtil.js"
	import type { HTMLAttributes } from "svelte/elements"
	import {
		deviceDetectorAction,
		dragScrollAction,
		scrollDetectAction
	} from "../../actions/index.js"
	import KeyboardArrowLeftIcon from "../../icons/KeyboardArrowLeftIcon.svelte"
	import KeyboardArrowRightIcon from "../../icons/KeyboardArrowRightIcon.svelte"

	interface Props extends HTMLAttributes<HTMLElement> {
		data: SectionType[]
	}

	let { class: className = "", data, ...rest }: Props = $props()

	let contentEl: HTMLElement
	let showRightArrow = $state(false)
	let isDragging = $state(false)

	let isDesktopDevice = $state(false)
</script>

<nav {...rest} class={styles.scrollSection}>
	{#if !showRightArrow}
		<Button variant="text" class={styles.arrowIndicator}>
			<KeyboardArrowLeftIcon height={"16px"} width={"16px"} />
		</Button>
	{/if}
	<div
		class={styles.content}
		bind:this={contentEl}
		use:scrollDetectAction={{
			handler: (v) => {
				showRightArrow = v
			},
			disabled: isDragging
		}}
		use:dragScrollAction={{
			onDrag: () => {
				isDragging = true
			},
			disabled: !isDesktopDevice
		}}
		use:deviceDetectorAction={{
			onChange: ({ deviceType }) => {
				isDesktopDevice = deviceType === "desktop"
			}
		}}
	>
		{#each data as { onClick, reference, isActive }}
			<Button
				variant="text"
				onclick={onClick}
				class={classMapUtil({
					[styles.button]: true,
					[styles.active]: isActive
				})}
			>
				{reference}
			</Button>
		{/each}
	</div>
	{#if showRightArrow}
		<Button variant="text" class={styles.arrowIndicator}>
			<KeyboardArrowRightIcon height={"16px"} width={"16px"} />
		</Button>
	{/if}
</nav>
