export default {
  title: 'Contact Details',
  name: 'contact',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Email Address',
      name: 'email',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Instagram URL',
      name: 'instagramUrl',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Phone Number',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'layout',
    },
    prepare() {
      return {
        title: `Contact`
      }
    }
  }
}