export const isEmpty = (obj:any) => {
    if (obj === null || obj === undefined) {
        return {}
    }
    return !Object.keys(obj).length;
}