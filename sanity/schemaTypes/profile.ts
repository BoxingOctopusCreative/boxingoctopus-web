import { defineArrayMember, defineField, defineType } from 'sanity';

export const profileType = defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    fields: [
        defineField({
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'profileImageAlt',
            title: 'Profile Image Alt',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'profileText',
            title: 'Profile Text',
            type: 'array',
            of: [defineArrayMember({ type: 'block' })],
            validation: (rule) => rule.required(),
        })
    ],
})