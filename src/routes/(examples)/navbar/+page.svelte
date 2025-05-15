<script lang="ts">
	import { Button, Navbar } from "@/lib/index.js"

	let isOpen = $state(true)
</script>

<Navbar>
    <Button
        onclick={() => {
            isOpen = !isOpen
        }}
    >
        test
    </Button>
    <span>test</span>
</Navbar>