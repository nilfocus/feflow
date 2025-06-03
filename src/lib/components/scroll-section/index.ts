import ScrollSectionComponent from "./ScrollSection.svelte"
import ScrollSectionItemComponent from "./ScrollSectionItem.svelte"

type ScrollSectionComponentType = typeof ScrollSectionComponent & {
	Item: typeof ScrollSectionItemComponent
}

const ScrollSection =
	ScrollSectionComponent as unknown as ScrollSectionComponentType
ScrollSection.Item = ScrollSectionItemComponent

export { ScrollSection as default }
