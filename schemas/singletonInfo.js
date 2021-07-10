export default {
  title: 'Info',
  name: 'info',
  type: 'document',
  __experimental_actions: ['update',  'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Clients',
      name: 'clients',
      type: 'array', 
      of: [{
        type: 'block',
        styles: [
          {title: 'Normal', value: 'normal'},
        ],
        lists: [
          {title: 'Bullet', value: 'bullet'},
        ],
      }],
    },
    {
      title: 'Biography Text',
      name: 'biographyText',
      type: 'array', 
      of: [{type: 'block'}],
    },
    {
      title: 'Biography Image',
      name: 'biographyImage',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Image Alt Text (Recommended for SEO)',
          options: {
            isHighlighted: true
          }
        },
      ]
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}