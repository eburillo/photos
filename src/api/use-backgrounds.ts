import { createMockApiHook } from './create-mock-api-hook'

type Background = {
  id: string
  name: string
  src: string
}

const staticBackgrounds: Background[] = [
  {
    id: 'bg-1',
    src: 'https://images.unsplash.com/photo-1633821051688-fc558b716185?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
    name: 'Background A'
  },
  {
    id: 'bg-2',
    src: 'https://images.unsplash.com/photo-1578922427288-a47338083a57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=790&q=80',
    name: 'Background B'
  },
  {
    id: 'bg-3',
    src: 'https://images.unsplash.com/photo-1487147264018-f937fba0c817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    name: 'Background C'
  }
]

export const useBackgrounds = createMockApiHook(staticBackgrounds)
