export function monthMapper(index: number): string | null {
  return [
    'Jan',
    'Fev',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil',
    'Août',
    'Sept',
    'Oct',
    'Nov',
    'Déc',
  ][index - 1] ?? null;
}

export function getMonth(date: string): string | null {
  return monthMapper(new Date(date).getMonth());
}
