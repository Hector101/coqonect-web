import { TSkillCategories } from 'src/apolloTypes';

export function isFunction(value: () => void) {
  return value && typeof value === 'function';
}

export function getGraphQLMessage(message: string) {
  return message.split('GraphQL error: Error: ')[1];
}

export function groupedSelectionOptions(options: TSkillCategories[]) {
  if (!options) {
    return [];
  }

  return options.map((option) => ({
    ...option,
    label: capitalizeString(option.name),
    options: option.skills.map((skill) => ({
      ...skill,
      label: capitalizeString(skill.name),
      value: skill.name,
    })),
  }));
}

export function capitalizeString(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}
