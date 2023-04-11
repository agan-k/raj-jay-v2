import * as prismic from '@prismicio/client';

export const repositoryName = 'https://dranchv2.cdn.prismic.io/api/v2';

export const client = prismic.createClient(repositoryName, {});
