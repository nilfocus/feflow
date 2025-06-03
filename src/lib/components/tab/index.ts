import TabComponent from "./Tab.svelte"
import TabContentComponent from "./TabContent.svelte"
import TabItemComponent from "./TabItem.svelte"

type TabComponentType = typeof TabComponent & {
	Content: typeof TabContentComponent
	Item: typeof TabItemComponent
}

const Tab = TabComponent as unknown as TabComponentType
Tab.Content = TabContentComponent
Tab.Item = TabItemComponent

export { Tab as default }
