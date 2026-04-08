import { type SchemaTypeDefinition } from 'sanity';
import { projectType } from './project';
import { resumeType } from './resume';
import { profileType } from './profile';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, resumeType, profileType],
};
