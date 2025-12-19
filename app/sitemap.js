import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.datocms.com/';
const client = new GraphQLClient(endpoint, {
    headers: {
        Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
    },
});

async function getAllProjectSlugs() {
    const response = await client.request(
        gql`
            {
                allProjects {
                    slug
                }
            }
        `
    );
    return response.allProjects;
}

export default async function sitemap() {
    const baseUrl = 'https://www.bryanherdianto.site';

    // Fetch all project slugs from DatoCMS
    const projects = await getAllProjectSlugs();

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];

    // Dynamic project pages
    const projectPages = projects.map((project) => ({
        url: `${baseUrl}/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...staticPages, ...projectPages];
}