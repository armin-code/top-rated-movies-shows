export function getTopTen(results): any {
  return results.slice(0, 10);
}

export function checkSearchFilter(value: string): boolean {
  return value && value.length > 2;
}
