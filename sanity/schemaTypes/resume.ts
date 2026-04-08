import { defineArrayMember, defineField, defineType } from 'sanity';
import { MonthYearStringInput } from '../components/MonthYearStringInput';

/** Month + year only, no day — avoids Sanity's `date` type (ISO YYYY-MM-DD) validator. */
function validateMonthYearString(value: unknown): true | string {
  if (typeof value !== 'string') return 'Required';
  const trimmed = value.trim();
  if (!/^\d{4}-\d{2}$/.test(trimmed)) {
    return 'Use YYYY-MM (month and year only, e.g. 2024-06)';
  }
  const month = Number(trimmed.slice(5, 7));
  if (month < 1 || month > 12) return 'Month must be 01–12';
  return true;
}

export const resumeType = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'jobLocation',
      title: 'Job Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'jobStartDate',
      title: 'Job Start Date',
      type: 'string',
      description: 'Month and year only: YYYY-MM (e.g. 2024-03).',
      components: { input: MonthYearStringInput },
      validation: (rule) => rule.required().custom(validateMonthYearString),
    }),
    defineField({
      name: 'presentJob',
      title: 'Present job',
      type: 'boolean',
      description: 'Check if this is your current role (no end date).',
      initialValue: false,
    }),
    defineField({
      name: 'jobEndDate',
      title: 'Job End Date',
      type: 'string',
      description: 'Month and year only: YYYY-MM (e.g. 2024-03).',
      components: { input: MonthYearStringInput },
      hidden: ({ parent }) => Boolean(parent?.presentJob),
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { presentJob?: boolean | null };
          if (parent?.presentJob) return true;
          if (typeof value !== 'string' || value.trim() === '') {
            return 'End date is required unless this is a present job';
          }
          const trimmed = value.trim();
          if (!/^\d{4}-\d{2}$/.test(trimmed)) {
            return 'Use YYYY-MM (month and year only, e.g. 2024-06)';
          }
          const month = Number(trimmed.slice(5, 7));
          if (month < 1 || month > 12) return 'Month must be 01–12';
          return true;
        }),
    }),
    defineField({
      name: 'jobDescription',
      title: 'Job Description',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
  ],
});
