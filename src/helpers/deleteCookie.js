export const deleteCookie = (name) => {
    let date = new Date();
    date.setTime(date.getTime() - 60);
    document.cookie = `${name}=; expires=${date}`;
};
