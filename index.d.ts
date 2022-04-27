declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

declare module 'uuid' {
    // eslint-disable-next-line import/prefer-default-export
    export function v4() :string;
}
