export default {
  title: 'Image Slide',
  name: 'imageSlide',
  type: 'object',
  fields: [
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'full-portrait',
      options: {
        list: [
          {title: '1x Portrait', value: 'full-portrait'},
          {title: '1x Landscape', value: 'full-landscape'},
          {title: '2x Portrait', value: 'two-portrait'}
        ],
      }
    },
    {
      title: "Images",
      name: 'images',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [{
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
              isHighlighted: true // <-- make this field easily accessible
            }
          },
        ]
      }],
      validation: Rule => Rule.min(1)
    },
  ],
  preview: {
    select: {
      title: 'layout',
      media: 'images.0',
    },
    prepare: (selection) => {

      return {
        title: `Image Slide (${selection.title})`,
        media: selection.media
      }
    }
  }
}
