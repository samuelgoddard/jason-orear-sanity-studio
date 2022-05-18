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
    {
      name: 'primaryColor',
      title: 'Primary Color',
      description: "Overrides the default background colour of the menu",
      type: 'colorPicker'
    },
    {
      name: 'secondaryColor',
      title: 'Secondary Color',
      description: "Overrides the default highlight colour of the menu (and accents around the site eg: logo and menu hover)",
      type: 'colorPicker'
    },
    {
      name: 'textColor',
      title: 'Text Color',
      description: "Overrides the default text colour of the menu",
      type: 'colorPicker'
    },
    {
      name: 'headerLightMode',
      title: 'Header Light Mode',
      description: "Overrides the header colours to be light (turn on when using a dark nav background)",
      type: 'boolean'
    }
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