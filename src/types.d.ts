export type Photo = {
  id: string
  name: string
  src: string
}

export type Background = {
  id: string
  name: string
  src: string
}

export type Button = {
  onClick: () => void
  children: React.ReactNode
}

export type Title = {
  children: string
}

export type ISettings = {
  backgroundSrc: string
  photoSrc: string
  text: string
  previewBackground: string
  previewPhoto: string
  previewText: string
}

export type ActionType = {
  type: string
  payload?: string
}
