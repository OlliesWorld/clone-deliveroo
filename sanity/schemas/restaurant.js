import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //   },
    // }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: Rule => Rule.required(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    defineField({
      name: 'lat',
      title: 'Latitude of restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating from (1-5 stars)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5).error("Please enter a value between 1 and 5"),
    }),
   defineField({
      name: 'type',
      title: 'Categories',
      validation: Rule => Rule.required(),
      type: 'reference', 
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return {...selection, subtitle: author && `by ${author}`}
    // },
  },
})
