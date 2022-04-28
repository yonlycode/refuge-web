export function monthMapper(index: number): string {
  return [
    'Jan',
    'Fev',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil',
    'Aout',
    'Sept',
    'Oct',
    'Nov',
    'Déc',
  ][index - 1]!;
}

export function getMonth(date: string): string {
  return monthMapper(new Date(date).getMonth());
}
