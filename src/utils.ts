// this should match the package.json homepage field with '/images' on the end
const HOMEPAGE_PREFIX = 'https://Stuart-Wilcox.github.io/Danielle-Humilde-Website';

export const getImageUrl = (imageName: string) => {
    return `${HOMEPAGE_PREFIX}/images/${imageName}`;
};

export const getLinkUrl = (pageName: string) => {
    return `${HOMEPAGE_PREFIX}/${pageName}`;
}