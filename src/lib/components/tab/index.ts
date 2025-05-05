import TabComponent from "./Tab.svelte"
import TabLabelComponent from "./TabLabel.svelte"
import TabContentComponent from "./TabContent.svelte"

export default Object.assign(TabComponent, {
	Tab: TabComponent,
	Label: TabLabelComponent,
	Content: TabContentComponent
})
