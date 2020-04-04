import { TSkillCategory } from 'src/apolloTypes';

export function isFunction(value: () => void) {
  return value && typeof value === 'function';
}

export function getGraphQLMessage(message: string) {
  return message.split('GraphQL error: ')[1];
}

export function groupedSelectionOptions(options: TSkillCategory[]) {
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
    })).sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
      return 0;
    }),
  }));
}

export function capitalizeString(value: string) {
  return value[0].toUpperCase() + value.slice(1);
}
