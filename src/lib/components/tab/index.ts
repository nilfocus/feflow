import TabComponent from "./Tab.svelte"
import TabContentComponent from "./TabContent.svelte"

type TabComponentType = typeof TabComponent & {
	Content: typeof TabContentComponent
}

const Tab = TabComponent as unknown as TabComponentType
Tab.Content = TabContentComponent

export { Tab as default }
