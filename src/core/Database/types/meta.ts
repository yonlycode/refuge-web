export enum RecordType {
    EATERY = 'EATERY',
    ROOM = 'ROOM',
    CONTACT = 'CONTACT',
    GUIDE = 'GUIDE'
}

export enum FilterKeysNames {
    PARTITION_KEY = 'partition_key',
    FILTER_KEY = 'filter_key',
}

export enum MetaKeysNames {
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at',
}

export type FilterKeys = {
    [FilterKeysNames.PARTITION_KEY]?: RecordType,
    [FilterKeysNames.FILTER_KEY]?: string,
}

export type MetaKeys = {
    [MetaKeysNames.CREATED_AT]?: string,
    [MetaKeysNames.UPDATED_AT]?: string,
}
