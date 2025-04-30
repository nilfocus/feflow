import MenuComponent from "./Menu.svelte"
import MenuItemComponent from "./MenuItem.svelte"

export default Object.assign(MenuComponent, {
	Item: MenuItemComponent
})
