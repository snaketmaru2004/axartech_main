import fs from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const BLOGS_FILE = path.join(DATA_DIR, 'blogs.json');

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  createdAt: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  tag: string;
  date: string;
  slug: string;
}

async function ensureDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

export async function getProjects(): Promise<Project[]> {
  await ensureDir();
  try {
    const data = await fs.readFile(PROJECTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    // Initial data if file doesn't exist
    const initialProjects = [
      {
        id: '1',
        title: 'Vigyat AgroStore',
        category: 'E-Commerce Platform',
        description: 'A comprehensive digital marketplace for agricultural supplies with integrated knowledge-sharing for farmers.',
        image: '/projects/vigyat.png',
        createdAt: new Date().toISOString()
      },
      {
        id: '2',
        title: 'JK Tissues',
        category: 'Corporate Showcase',
        description: 'Premium product catalog and brand platform for leading tissue manufacturers, focusing on B2B excellence.',
        image: '/projects/jk-tissues.png',
        createdAt: new Date().toISOString()
      },
      {
        id: '3',
        title: 'Developer Portfolio',
        category: 'Personal Branding',
        description: 'Cutting-edge portfolio site with interactive experiences, showcasing full-stack engineering expertise.',
        image: '/projects/sanket-portfolio.png',
        createdAt: new Date().toISOString()
      }
    ];
    await fs.writeFile(PROJECTS_FILE, JSON.stringify(initialProjects, null, 2));
    return initialProjects;
  }
}

export async function addProject(project: Omit<Project, 'id' | 'createdAt'>) {
  const projects = await getProjects();
  const newProject: Project = {
    ...project,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString()
  };
  projects.unshift(newProject);
  await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));
  return newProject;
}

export async function getBlogs(): Promise<Blog[]> {
  await ensureDir();
  try {
    const data = await fs.readFile(BLOGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function addBlog(blog: Omit<Blog, 'id' | 'date' | 'slug'>) {
  const blogs = await getBlogs();
  const newBlog: Blog = {
    ...blog,
    id: Math.random().toString(36).substr(2, 9),
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    slug: blog.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
  };
  blogs.unshift(newBlog);
  await fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2));
  return newBlog;
}
