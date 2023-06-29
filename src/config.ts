export const config = {
    url:
        process.env.NODE_ENV === 'production'
            ? 'https://linear-beige.vercel.app'
            : 'http://localhost:3000',
};
