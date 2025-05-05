<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements"
	import { classMapUtil } from "../../utils/index.js"

	interface Props extends HTMLInputAttributes {
		label: string
	}

	let { class: className, label, children, ...rest }: Props = $props()
</script>

<div
	class={classMapUtil({
		["tabLabel"]: true
	})}
	style="--tab-count: 2"
>
	<input {...rest} type="radio" name="tabs" />
	<label for={rest.id}>{label}</label>
	<!-- <div
        class="line"
        style="left: calc({tabs.findIndex(
            (t) => t.id === activeTab
        )} * (100% / {tabs.length}))"
    ></div> -->
</div>

<style>
	.tabLabel {
		display: flex;
		position: relative;
		background: #f4f4f4;
	}

	input[type="radio"] {
		display: none;
	}

	label {
		flex: 1;
		text-align: center;
		padding: 12px 0;
		cursor: pointer;
		color: #333;
		font-size: 16px;
		transition: background 0.25s ease;
		background: #f4f4f4;
		position: relative;
		z-index: 1;
	}

	label:hover {
		background: #e0e0e0;
	}

	.line {
		position: absolute;
		bottom: -3px;
		height: 3px;
		background: #1e88e5;
		width: calc(100% / var(--tab-count));
		transition: left 0.25s ease;
		z-index: 0;
	}
</style>
