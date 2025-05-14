import { type Component } from "svelte"
import DrawerComponent, { type DrawerProps } from "./Drawer.svelte"
import DrawerHeaderComponent, {
	type DrawerHeaderProps
} from "./DrawerHeader.svelte"

export default Object.assign(DrawerComponent as Component<DrawerProps>, {
	Header: DrawerHeaderComponent as Component<DrawerHeaderProps>
})
