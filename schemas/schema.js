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
import client from './common/client'
import publication from './common/publication'

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
    client,
    imageSlide,
    seo
  ]),
})
