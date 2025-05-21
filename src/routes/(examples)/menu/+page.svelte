<script lang="ts">
	import { Button, Menu } from "@/lib/index.js"
</script>

<div style="width: 500px; margin: 5rem auto;">
	<Menu>
		{#snippet anchor()}
			<Button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#e3e3e3"
				>
					<path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
				</svg>
				<span>test</span>
			</Button>
		{/snippet}

		{#snippet items(handleClose)}
			<Menu.Item
				onclick={() => {
					console.log("edit")
					handleClose()
				}}
			>
				Edit
			</Menu.Item>
			<Menu.Item
				onclick={() => {
					console.log("print")
					handleClose()
				}}
			>
				Print
			</Menu.Item>
		{/snippet}
	</Menu>
</div>
