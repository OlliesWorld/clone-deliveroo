import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Feature category name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Description of dish',
      type: 'string',
      validation: Rule => Rule.required(200),
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'restaurant'}}],
    }),
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
