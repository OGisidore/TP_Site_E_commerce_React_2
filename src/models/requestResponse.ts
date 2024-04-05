

export interface RequestResponse {
    isSuccess: boolean,
    message ?:string,
    result: any,
    results: Array<any>
}