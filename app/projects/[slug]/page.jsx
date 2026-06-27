import { notFound } from "next/navigation";
import ProjectDetail from "../../components/ProjectDetail";
import { projects, getProject } from "../data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sathish`,
    description: project.tagline || project.desc,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
