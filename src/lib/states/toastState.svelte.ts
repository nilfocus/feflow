import { TOAST_DEFAULT_DURATION } from "../constants.js"
import type { ToastType } from "../types/index.js"

export const data = $state<{ toasts: ToastType[] }>({
	toasts: []
})

export default function toastState() {
	return {
		data,
		add(toast: Omit<Partial<ToastType>, "id">) {
			data.toasts = [
				...data.toasts,
				{
					id: crypto.randomUUID(),
					message: toast.message ?? "",
					duration: toast.duration ?? TOAST_DEFAULT_DURATION,
					position: toast.position ?? "bottom-right",
					...toast
				}
			]
		},
		async remove(toastId: string) {
			await new Promise((resolve) => setTimeout(resolve, 50))
			data.toasts = data.toasts.filter((toast) => toast.id !== toastId)
		},
		clear() {
			data.toasts = []
		},
		async clearWithDelay(step = 200) {
			const toastsCopy = [...data.toasts].sort((a, b) => {
				const d1 = a.duration ?? TOAST_DEFAULT_DURATION
				const d2 = b.duration ?? TOAST_DEFAULT_DURATION
				return d1 - d2
			})

			for (const toast of toastsCopy) {
				this.remove(toast.id)
				await new Promise((res) => setTimeout(res, step))
			}
		}
	}
}
