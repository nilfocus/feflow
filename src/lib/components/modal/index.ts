import ModalComponent, { type ModalProps } from "./Modal.svelte"
import ModalHeaderComponent, {
	type ModalHeaderProps
} from "./ModalHeader.svelte"
import ModalContentComponent from "./ModalContent.svelte"
import ModalActionsComponent, {
	type ModalActionsProps
} from "./ModalActions.svelte"
import type { Component } from "svelte"

export default Object.assign(ModalComponent as Component<ModalProps>, {
	Header: ModalHeaderComponent as Component<ModalHeaderProps>,
	Content: ModalContentComponent,
	Actions: ModalActionsComponent as Component<ModalActionsProps>
})
