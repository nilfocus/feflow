import type { ColorType, PositionType } from "./index.js"

export interface ToastType {
	id: string
	message: string
	color?: ColorType
	duration?: number
	position?: PositionType
}
