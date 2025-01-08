const ONE_MEGABYTE_IN_BYTES: number = parseInt('1.000.000'.replace('.', '').replace('.', ''), 10);
export const convertMegabytesToBytes = (megabytes: number): number => megabytes * ONE_MEGABYTE_IN_BYTES;
