export default {
  title: 'Client',
  name: 'client',
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
      description: 'The external URL to link to this client',
      name: 'url',
      type: 'url',
    },
  ],
}
