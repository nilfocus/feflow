<script lang="ts">
	import { onMount, type Snippet } from "svelte"
	import {
		themeConfigDefault,
		THEME_STORAGE,
		THEME_ATTR
	} from "../../constants.js"
	import { setThemeConfigContext } from "../../contexts/index.js"
	import type { ThemeConfigType } from "../../types/index.js"
	import {
		mergeObjectUtil,
		themeConfigUtil,
		themeModeUtil
	} from "../../utils/index.js"
	import { themeModeState } from "../../states/index.js"

	interface Props {
		customTheme?: ThemeConfigType
		children: Snippet<[]>
	}

	let { customTheme, children }: Props = $props()

	const theme = mergeObjectUtil(
		themeConfigDefault,
		customTheme || {}
	) as ThemeConfigType

	setThemeConfigContext(theme)

	const { themeConfigToCssString } = themeConfigUtil()
	const style = themeConfigToCssString(theme)

	const { getThemeMode } = themeModeUtil()
	const _themeModeState = themeModeState()

	onMount(() => {
		const themeMode = getThemeMode()
		_themeModeState.setThemeMode(themeMode)
	})
</script>

<svelte:head>
	{@html `
	<script>
		(function () {
			const theme = localStorage.getItem("${THEME_STORAGE}") || "light";
			document.documentElement.setAttribute("${THEME_ATTR}", theme);
			document.documentElement.style.colorScheme = theme;
		})()
	</script>
	`}

	{@html style}

	<style>
		* {
			margin: 0;
			padding: 0;
			outline: 0;
			appearance: none;
			border: none;
			text-decoration: none;
			list-style: none;
			box-sizing: border-box;
			scroll-behavior: smooth;
		}

		body {
			background: var(--ff-color-bg);
			color: var(--ff-color-text);
		}

		svg {
			display: inline-block;
			vertical-align: middle;
			fill: currentColor;
		}

		a {
			color: var(--ff-color-text);
		}

		/** text **/

		.text-primary {
			color: var(--ff-color-primary);
		}

		.text-on-primary {
			color: var(--ff-color-on-primary);
		}

		.text-secondary {
			color: var(--ff-color-secondary);
		}

		.text-on-secondary {
			color: var(--ff-color-on-secondary);
		}

		.text {
			color: var(--ff-color-text);
		}

		.text-muted {
			color: var(--ff-color-text-muted);
		}

		.text-on-bg {
			color: var(--ff-color-on-bg);
		}

		.text-on-surface {
			color: var(--ff-color-on-surface);
		}

		.text-on-disabled {
			color: var(--ff-color-on-disabled);
		}

		.text-on-focus {
			color: var(--ff-color-on-focus);
		}

		/** bg **/

		.bg-primary {
			background: var(--ff-color-primary);
		}

		.bg-secondary {
			background: var(--ff-color-secondary);
		}

		.bg-page {
			background: var(--ff-color-bg);
		}

		.bg-surface {
			background: var(--ff-color-surface);
		}

		.bg-disabled {
			background: var(--ff-color-disabled);
		}

		.bg-focus {
			background: var(--ff-color-focus);
		}

		.bg-0 {
			background: none !important;
		}

		/** border **/

		.border {
			border-color: var(--ff-color-border);
		}

		.border-0 {
			border: none !important;
		}

		[data-theme="light"] {
			--ff-color-success: #a7eac1;
			--ff-color-on-success: #004422;
			--ff-color-error: #f9b1b1;
			--ff-color-on-error: #661111;
			--ff-color-warning: #fde6b0;
			--ff-color-on-warning: #5a3d00;
			--ff-color-info: #a7dffc;
			--ff-color-on-info: #003344;
		}

		[data-theme="dark"] {
			--ff-color-success: #004422;
			--ff-color-on-success: #a7eac1;
			--ff-color-error: #661111;
			--ff-color-on-error: #f9b1b1;
			--ff-color-warning: #5a3d00;
			--ff-color-on-warning: #fde6b0;
			--ff-color-info: #003344;
			--ff-color-on-info: #a7dffc;
		}

		/** bg **/

		.bg-success {
			background: var(--ff-color-success);
		}

		.bg-error,
		.bg-danger {
			background: var(--ff-color-error);
		}

		.bg-warning {
			background: var(--ff-color-warning);
		}

		.bg-info {
			background: var(--ff-color-info);
		}

		/** hover bg **/
		.hover-bg-success:hover {
			background: var(--ff-color-success);
		}

		.hover-bg-error:hover,
		.hover-bg-danger:hover {
			background: var(--ff-color-error);
		}

		.hover-bg-warning:hover {
			background: var(--ff-color-warning);
		}

		.hover-bg-info:hover {
			background: var(--ff-color-info);
		}

		/** text **/

		.text-on-success {
			color: var(--ff-color-on-success);
		}

		.text-on-error,
		.text-on-danger {
			color: var(--ff-color-on-error);
		}

		.text-on-warning {
			color: var(--ff-color-on-warning);
		}

		.text-on-info {
			color: var(--ff-color-on-info);
		}

		/** hover text **/

		.hover-text-on-success:hover {
			color: var(--ff-color-on-success);
		}

		.hover-text-on-error:hover,
		.hover-text-on-danger:hover {
			color: var(--ff-color-on-error);
		}

		.hover-text-on-warning:hover {
			color: var(--ff-color-on-warning);
		}

		.hover-text-on-info:hover {
			color: var(--ff-color-on-info);
		}

		/** border **/

		.border-on-success {
			border-color: var(--ff-color-on-success);
		}

		.border-on-error,
		.border-on-danger {
			border-color: var(--ff-color-on-error);
		}

		.border-on-warning {
			border-color: var(--ff-color-on-warning);
		}

		.border-on-info {
			border-color: var(--ff-color-on-info);
		}

		/** hover border **/

		.hover-border-on-success:hover {
			border-color: var(--ff-color-on-success);
		}

		.hover-border-on-error:hover,
		.hover-border-on-danger:hover {
			border-color: var(--ff-color-on-error);
		}

		.hover-border-on-warning:hover {
			border-color: var(--ff-color-on-warning);
		}

		.hover-border-on-info:hover {
			border-color: var(--ff-color-on-info);
		}
	</style>
</svelte:head>

{@render children?.()}
