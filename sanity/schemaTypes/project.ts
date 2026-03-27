import { defineArrayMember, defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'projectTitle',
      title: 'Project Title',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'url',
          title: 'Link URL',
          type: 'url',
          validation: (rule) =>
            rule.required().uri({
              allowRelative: false,
              scheme: ['http', 'https'],
            }),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectImage',
      title: 'Project Image',
      type: 'object',
      fields: [
        defineField({
          name: 'asset',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'url',
          title: 'Link URL',
          type: 'url',
          validation: (rule) =>
            rule.required().uri({
              allowRelative: false,
              scheme: ['http', 'https'],
            }),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  preview: {
    select: {
      title: 'projectTitle.text',
      media: 'projectImage.asset',
      subtitle: 'projectTitle.url',
    },
  },
});
