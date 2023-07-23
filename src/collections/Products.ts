import { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle:'name'
  },
  fields:[
    {
      name:'name',
      type:'text'
    },
    {
      name:'Price',
      type:'number'
    },
    {
      name: "Image", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
  ]

}

export default Products