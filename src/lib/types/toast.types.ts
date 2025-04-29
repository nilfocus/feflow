import type { ColorType } from "./index.js"

export interface ToastType {
	id: string
	message: string
	color?: ColorType
	duration?: number
}
