export default {
  title: 'Publication',
  name: 'publication',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'URL (Optional)',
      description: 'The external URL to link to this publication',
      name: 'url',
      type: 'url',
    },
  ],
}
