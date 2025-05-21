import NavbarComponent from "./Navbar.svelte"
import NavbarItemComponent from "./NavbarItem.svelte"

type NavbarComponentType = typeof NavbarComponent & {
	Item: typeof NavbarItemComponent
}

const Navbar = NavbarComponent as unknown as NavbarComponentType
Navbar.Item = NavbarItemComponent

export { Navbar as default }
