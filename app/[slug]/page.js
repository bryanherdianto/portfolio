import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.datocms.com/';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
  },
});

async function getProjectData(slug) {
  const response = await client.request(
    gql`
      {
        allProjects(filter: { slug: { eq: "${slug}" } }) {
          image {
            url
          }
          name
          slug
          category
          shortDescription
          longDescription
          techStack {
            bulletPoint
          }
          skills {
            bulletPoint
          }
          githubLink
          deploymentLink
        }
      }
    `
  );
  return response.allProjects[0];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: project.name,
    description: project.shortDescription,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: project.name,
      description: project.shortDescription,
      images: [project.image.url],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <div className="py-20 px-6 text-center">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-xl mt-4">Sorry, we couldn't find the project you're looking for.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section className="py-12 md:py-20 px-4 md:px-6 flex-grow">
        <div className="max-w-6xl mx-auto rounded-lg overflow-hidden">
          <img src={project.image.url} alt={project.name} className="w-full mt-8 h-auto md:h-96 object-cover rounded-lg mb-6 md:mb-8" />

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{project.name}</h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 whitespace-pre-line">
              {project.longDescription}
            </p>

            {project.techStack && project.techStack.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tech.bulletPoint}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.skills && project.skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">Skills Utilized</h2>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {skill.bulletPoint}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gray-800 text-white py-2 px-5 rounded-lg hover:bg-gray-700 transition duration-300 font-medium text-sm md:text-base"
              >
                <img src="/github.png" alt="GitHub" className="w-5 h-5 mr-2 filter invert" />
                View on GitHub
              </a>
              {project.deploymentLink && (
                <a
                  href={project.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-500 transition duration-300 font-medium text-sm md:text-base"
                >
                  <img src="/globe.svg" alt="Live Demo" className="w-5 h-5 mr-2 brightness-0 invert" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}