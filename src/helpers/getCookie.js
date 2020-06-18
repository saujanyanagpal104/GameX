export const getCookie = (name) => {
    const cookies = document.cookie;
    if (cookies.includes(';')) {
        let cookie = cookies
            ? cookies
                  .split(';')
                  .find((cookie) => cookie.trim().startsWith(name))
            : null;
        return cookie.split('=')[1];
    } else {
        return cookies
            ? cookies.trim().startsWith(name)
                ? cookies.split('=')[1]
                : null
            : null;
    }
};
