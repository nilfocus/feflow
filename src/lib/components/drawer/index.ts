import DrawerComponent from "./Drawer.svelte"
import DrawerHeaderComponent from "./DrawerHeader.svelte"

type DrawerComponentType = typeof DrawerComponent & {
	Header: typeof DrawerHeaderComponent
}

const Drawer = DrawerComponent as unknown as DrawerComponentType
Drawer.Header = DrawerHeaderComponent

export { Drawer as default }
