<script lang="ts">
	import { Button, Menu } from "@/lib/index.js"
</script>

<div style="width: 500px; margin: 5rem auto;">
	<div style="display: flex; gap: 1rem;">
		<Menu id="menu1" openOnHover>
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
					<span>open on hover</span>
				</Button>
			{/snippet}

			{#snippet items()}
				<Menu.Item
					onclick={() => {
						console.log("edit")
					}}
				>
					Edit
				</Menu.Item>
				<Menu.Item
					onclick={() => {
						console.log("print")
					}}
				>
					Print
				</Menu.Item>
			{/snippet}
		</Menu>

		<Menu id="menu2" isTranslucent>
			{#snippet anchor()}
				<Button>
					<span>open</span>
				</Button>
			{/snippet}

			{#snippet items()}
				<Menu.Item
					onclick={() => {
						console.log("edit")
					}}
				>
					Edit
				</Menu.Item>
				<Menu.Item
					onclick={() => {
						console.log("print")
					}}
				>
					Print
				</Menu.Item>
			{/snippet}
		</Menu>
	</div>
</div>
