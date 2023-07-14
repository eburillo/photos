import { ActionType, ISettings } from '../types'

export const SETTINGS_ACTIONS = {
  SET_BACKGROUND: 'SET_BACKGROUND',
  SET_PHOTO: 'SET_PHOTO',
  SET_TEXT: 'SET_TEXT',
  GENERATE_PREVIEW: 'GENERATE_PREVIEW'
}

export const settingsInitialState = {
  backgroundSrc: '',
  photoSrc: '',
  text: '',
  previewBackground: '',
  previewPhoto: '',
  previewText: ''
}

export const settingsReducer = (
  state: ISettings,
  action: ActionType
): ISettings => {
  const { type, payload } = action

  switch (type) {
    case SETTINGS_ACTIONS.SET_BACKGROUND: {
      return {
        ...state,
        backgroundSrc: payload as string
      }
    }
    case SETTINGS_ACTIONS.SET_PHOTO: {
      return {
        ...state,
        photoSrc: payload as string
      }
    }
    case SETTINGS_ACTIONS.SET_TEXT: {
      return {
        ...state,
        text: payload as string
      }
    }
    case SETTINGS_ACTIONS.GENERATE_PREVIEW: {
      return {
        ...state,
        previewBackground: state.backgroundSrc,
        previewPhoto: state.photoSrc,
        previewText: state.text
      }
    }
    default:
      throw new Error('Invalid action')
  }
}
