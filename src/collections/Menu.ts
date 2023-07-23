import { CollectionConfig } from 'payload/types';

const Menu: CollectionConfig = {
  slug: 'menu',
  admin: {
    useAsTitle: 'nameMenu'
  },
  fields: [
  {
    name: 'mainCourse',
    type: 'text'
  },
  {
    name: 'appetizer',
    type: 'text'
  },
  {
    name: 'price',
    type: 'number'
  },
  {
    name: 'Day', // required
    type: 'select', // required
    hasMany: false,
    admin: {
      isClearable: true,
      isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
    },
    options: [
      {
        label: 'Monday',
        value: 'monday',
      },
      {
        label: 'Tuesday',
        value: 'tuesday',
      },
      {
        label: 'Wendsday',
        value: 'wendsday',
      },
      {
        label: 'Thursday',
        value: 'Thursday',
      },
      {
        label: 'Friday',
        value: 'friday',
      },
      {
        label: 'Saturday',
        value: 'saturday',
      },
      {
        label: 'Sunday',
        value: 'sunday',
      },
    ]
  }
  ]
}

export default Menu