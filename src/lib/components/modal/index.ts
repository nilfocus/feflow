import ModalComponent from "./Modal.svelte"
import ModalContentComponent from "./ModalContent.svelte"
import ModalActionsComponent from "./ModalActions.svelte"

type ModalComponentType = typeof ModalComponent & {
	Content: typeof ModalContentComponent
	Actions: typeof ModalActionsComponent
}

const Modal = ModalComponent as unknown as ModalComponentType
Modal.Content = ModalContentComponent
Modal.Actions = ModalActionsComponent

export { Modal as default }
