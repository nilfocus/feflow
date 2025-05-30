export type VerticalPositionType = "top" | "bottom"
export type HorizontalPositionType = "left" | "right" | "center"

export type PositionType = `${VerticalPositionType}-${HorizontalPositionType}`

export type PositionTypeNoCenter =
	| VerticalPositionType
	| Exclude<HorizontalPositionType, "center">
