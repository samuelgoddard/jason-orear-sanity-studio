export default {
  title: 'External Video Slide',
  name: 'externalVideoSlide',
  type: 'object',
  fields: [
    {
      title: "Video URL (Full)",
      name: 'videoUrl',
      type: 'url'
    },
    {
      title: "Video (Short Loop)",
      name: 'videoShort',
      type: 'file'
    },
  ]
}
