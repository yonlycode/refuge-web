export type RecordType = 'EATERY' | 'ROOM' | 'CONTACT';

export type FilterKeys = {
    partition_key?: string,
    filter_key?: string,
}

export type MetaKeys = {
    createdAt?: string,
    updatedAt?: string,
}

export type TypeMeta = MetaKeys & {
    type?: RecordType,
}
