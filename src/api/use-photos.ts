import { createMockApiHook } from './create-mock-api-hook'
type Photo = {
  id: string
  name: string
  src: string
}

const staticPhotos: Photo[] = [
  {
    id: 'ph-1',
    src: 'https://wp.gotphoto.com/wp-content/uploads/sites/2/2019/01/logo_fotograf_de.svg',
    name: 'IMG-001'
  },
  {
    id: 'ph-1',
    src: 'https://wp.gotphoto.com/wp-content/uploads/sites/3/2019/01/logo_gotphoto.svg',
    name: 'IMG-002'
  }
]

export const usePhotos = createMockApiHook(staticPhotos)
