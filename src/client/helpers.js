/** Builds the key for a document from its title */
export const buildKey = (title) => {
    title = title.toLowerCase();
    return title.replaceAll(' ', '-');
}

