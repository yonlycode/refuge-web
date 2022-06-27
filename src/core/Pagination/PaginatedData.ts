export type PaginatedData<T> = {
    data: Array<T>;
    pagination: {
        totalDocs: number;
        perPage: number;
        pageCount: number;
        currentPage: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
    } | null
}
