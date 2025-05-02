import ModalComponent from "./Modal.svelte"
import ModalHeaderComponent from "./ModalHeader.svelte"
import ModalContentComponent from "./ModalContent.svelte"

export default Object.assign(ModalComponent, {
	Header: ModalHeaderComponent,
	Content: ModalContentComponent
})
