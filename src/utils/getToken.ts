export const getToken = () => {
    const token = localStorage.getItem('accessToken');
    return token;
}