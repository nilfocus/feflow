import type { Component } from "svelte"
import MenuComponent, { type MenuProps } from "./Menu.svelte"
import MenuItemComponent from "./MenuItem.svelte"

export default Object.assign(MenuComponent as Component<MenuProps>, {
	Item: MenuItemComponent
})
