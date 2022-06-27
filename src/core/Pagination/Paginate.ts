import { PaginatedData } from './PaginatedData';

const defaultPage = 1;
const defaultPerPage = 5;

export default function Paginate<T>(
  array: Array<T>,
  page?: string,
  perPage?: string,
) :PaginatedData<T> {
  const p = page && page !== '0' ? parseInt(page, 10) : defaultPage;
  const pp = perPage ? parseInt(perPage, 10) : defaultPerPage;

  const first = (p - 1) * pp;
  const last = ((p - 1) * pp) + pp;

  return {
    data: array.filter((_, index) => first <= index && index < last),
    pagination: {
      totalDocs: array.length,
      perPage: pp,
      pageCount: Math.round(array.length / pp),
      currentPage: p,
      hasPrevPage: p !== 1,
      hasNextPage: p < (array.length / pp),
    },
  };
}
