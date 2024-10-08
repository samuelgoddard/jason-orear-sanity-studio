import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Singletons
import singletonHome from './singletonHome'
import singletonInfo from './singletonInfo'
import singletonContact from './singletonContact'

// Documents
import works from './works'

// Common
import seo from './common/seo'
import imageSlide from './common/imageSlide'
import videoSlide from './common/videoSlide'
import client from './common/client'
import publication from './common/publication'
import award from './common/award'
import externalVideoSlide from './common/externalVideoSlide'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    singletonHome,
    singletonInfo,
    singletonContact,
    works,
    publication,
    award,
    client,
    imageSlide,
    videoSlide,
    externalVideoSlide,
    seo
  ]),
})
