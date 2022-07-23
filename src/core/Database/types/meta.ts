export type RecordType = 'EATERY' | 'ROOM' | 'CONTACT' | 'GUIDE';

export type FilterKeys = {
    partition_key?: string,
    filter_key?: string,
}

export type MetaKeys = {
    createdAt?: string,
    updatedAt?: string,
}
