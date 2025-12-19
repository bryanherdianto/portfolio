import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://graphql.datocms.com/';
const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
  },
});

async function getExperienceEducationData() {
  const response = await client.request(
    gql`
      {
        experience {
          experienceEducation {
            universityName
            major
            date
            description
          }
        }
      }
    `
  );
  return response.experience.experienceEducation;
}

async function getExperienceWorkData() {
  const response = await client.request(
    gql`
      {
        experience {
          experienceWork {
            workPosition
            companyName
            date
            description {
              bulletPoint
            }
          }
        }
      }
    `
  );
  return response.experience.experienceWork;
}

async function getSkillData() {
  const response = await client.request(
    gql`
      {
        skill {
          skillBlock {
            title
            skillComponent {
              name
              level
            }
          }
        }
      }
    `
  );
  return response.skill.skillBlock;
}

async function getCV() {
  const response = await client.request(
    gql`
      {
        cv {
          cv {
            url
          }
        }
      }
    `
  );
  return response.cv.cv;
}

async function getProjectData() {
  const response = await client.request(
    gql`
      {
        allProjects {
          image {
            url
          }
          name
          slug
          category
          categoryClassname
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
  return response.allProjects;
}

export default async function Home() {
  const experienceEducation = await getExperienceEducationData();
  const experienceWork = await getExperienceWorkData();
  const skill = await getSkillData();
  const project = await getProjectData();
  const cv = await getCV();
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero cvUrl={cv.url} />
      <About />
      <Experience experienceEducation={experienceEducation} experienceWork={experienceWork} />
      <Skills skill={skill} />
      <Projects project={project} />
      <Contact />
      <Footer />
    </main>
  );
}
