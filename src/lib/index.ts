export function isFunction(value: () => void) {
  return value && typeof value === 'function';
}


export function getGraphQLMessage(message: string) {
  return message.split('GraphQL error: Error: ')[1];
}
