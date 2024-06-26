export const getImageUrl = (path) => {
    return new URL(`/public/img/${path}`, import.meta.url).href;
};