export default new class dateUtils {
  static monthMapper(index: number): string {
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

  static getMonth(date: string): string {
    return dateUtils.monthMapper(new Date(date).getMonth());
  }
}();
