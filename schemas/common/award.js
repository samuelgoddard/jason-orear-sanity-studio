export default {
  title: 'Award',
  name: 'award',
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
      description: 'The external URL to link to this award',
      name: 'url',
      type: 'url',
    },
  ],
}
