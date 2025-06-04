<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import classMapUtil from "../../utils/classMapUtil.js"
	import styles from "./InputPassword.module.css"
	import Input from "../input/index.js"
	import type { ColorType, VariantType } from "../../types/index.js"
	import { VisibilityIcon, VisibilityOffIcon } from "../../icons/index.js"
	import Button from "../button/index.js"

	interface Props extends Omit<HTMLInputAttributes, "type"> {
		label?: string
		variant?: VariantType
		color?: ColorType
	}

	let {
		class: className = "",
		label,
		variant = "outlined",
		color,
		...rest
	}: Props = $props()

	let passwordVisible = $state(false)

	function togglePasswordVisibility() {
		passwordVisible = !passwordVisible
	}
</script>

<div
	class={classMapUtil(
		className,
		[className, styles],
		[variant, styles],
		styles.inputPassword
	)}
>
	<Button
		pressedEffect={false}
		type="button"
		variant="text"
		class={styles.passwordToggleButton}
		onclick={togglePasswordVisibility}
	>
		{#if passwordVisible}
			<VisibilityIcon height="20px" width="20px" />
		{:else}
			<VisibilityOffIcon height="20px" width="20px" />
		{/if}
	</Button>
	<Input
		class={styles.inputGroup}
		{label}
		{variant}
		{color}
		type={passwordVisible ? "text" : "password"}
		focused={passwordVisible}
		{...rest}
	/>
</div>
