export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Featured Work',
      name: 'featuredWork',
      description: 'The work articles that feature in the home page carousel, the first landscape image from the slides will be used as the carousel image',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'work'}
          ]
        }
      ],
      validation: Rule => Rule.required().min(5).max(5)
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