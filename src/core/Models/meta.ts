export type ReservationType = 'EATERY' | 'ROOM';

export type FilterKeys = {
    partition_key?: string,
    filter_key?: string,
}

export type MetaKeys = {
    createdAt?: string,
    updatedAt?: string,
}

export type ReservationMeta = MetaKeys & {
    type?: ReservationType,
}
