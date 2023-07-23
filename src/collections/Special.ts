import { CollectionConfig } from 'payload/types';

const Special: CollectionConfig = {
  slug: 'special',
  admin:{
    useAsTitle:'name'
  },
  fields: [
    {
      name: 'name',
      type: 'text'
    },
    {
      name: 'price',
      type: 'number'
    },
    {
      name: 'image',
      type: 'upload',
      relationTo : 'media',
      required : true,
      filterOptions: {
        mimeType: {
          contains: "image"
        }
      }
    }
  ]
}

export default Special