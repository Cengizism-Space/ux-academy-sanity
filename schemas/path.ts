import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'path',
  title: 'Paths',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
