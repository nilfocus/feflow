<script lang="ts">
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./InputFile.module.css"
	import type { HTMLInputAttributes } from "svelte/elements"
	import { inputDropAction } from "../../actions/index.js"

	interface Props extends Omit<HTMLInputAttributes, "type"> {
		onDropEvent?: (files: File[]) => void
	}

	let {
		class: className = "",
		onDropEvent,
		children,
		...rest
	}: Props = $props()

	let files = $state<File[]>([])
	let isDragging = $state(false)

	function handleDrop(newFiles: File[]) {
		const filesData = [...files, ...newFiles]
		files = filesData
		onDropEvent?.(filesData)
	}
</script>

<div
	class={classMapUtil({
		[className as string]: true,
		[styles.dropzone]: true,
		[styles.dragging]: isDragging
	})}
	use:inputDropAction={{
		onFiles: handleDrop,
		setIsDragging: (v: boolean) => {
			isDragging = v
		}
	}}
	role="region"
>
	{@render children?.()}
	<input
		{...rest}
		type="file"
		onchange={(e) => {
			if (files.length > 0 && !rest.multiple) return
			handleDrop(Array.from((e.target as HTMLInputElement).files || []))
		}}
	/>
</div>
