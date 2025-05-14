import type { Component } from "svelte"
import TabComponent from "./Tab.svelte"
import TabContentComponent from "./TabContent.svelte"

export default Object.assign(TabComponent, {
	Tab: TabComponent,
	Content: TabContentComponent as Component<TabContentComponent>
})
