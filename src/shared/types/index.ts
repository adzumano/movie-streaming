export interface IParams {
    limit?: number;
    offset?: number;
    search?: string | null;
}

export interface IResponse<T> {
    next: string;
    previous: string;
    count: number;
    results: Array<T>;
    params?: IParams;
}

export type Identity<T> = { [P in keyof T]: T[P] };

export type Replace<T, K extends keyof T, TReplace> = Identity<
    Pick<T, Exclude<keyof T, K>> & {
        [P in K]: TReplace;
    }
>;
