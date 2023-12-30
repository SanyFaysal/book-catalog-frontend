
export const checkOwner = (userId: string, added_by: string) => {
    if (userId === added_by) return true;
    else false
}