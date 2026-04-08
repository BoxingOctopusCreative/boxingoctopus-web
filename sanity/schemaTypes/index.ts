import { type SchemaTypeDefinition } from 'sanity';
import { projectType } from './project';
import { resumeType } from './resume';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, resumeType],
};
