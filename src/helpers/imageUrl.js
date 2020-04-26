export const imageUrl = (url) => {
    const urlSplit = url.split('.com/')[1];
    const imgixUrl = `https://gamex-images.imgix.net/${urlSplit}?w=1600&w=10000&fit=crop&q=50&auto=format&ar=16:10`;
    return imgixUrl;
};
