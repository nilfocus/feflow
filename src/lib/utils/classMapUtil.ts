type ClassValue = string | { [key: string]: any } | undefined | null | false

export default function classMapUtil(
	...classes: (ClassValue | [string, Record<string, string>])[]
): string {
	return classes
		.flatMap((cls) => {
			if (!cls) return []

			if (
				Array.isArray(cls) &&
				typeof cls[0] === "string" &&
				typeof cls[1] === "object"
			) {
				const [classStr, styleMap] = cls
				return classStr
					.trim()
					.split(/\s+/)
					.map((c) => styleMap[c] || c)
			}

			if (typeof cls === "string") {
				return cls.trim().split(/\s+/)
			}

			if (typeof cls === "object") {
				return Object.entries(cls)
					.filter(([_, value]) => Boolean(value))
					.map(([key]) => key)
			}

			return []
		})
		.filter(Boolean)
		.join(" ")
}
