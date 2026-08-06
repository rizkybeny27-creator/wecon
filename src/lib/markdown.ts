import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export type PostData = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  coverImage?: string;
  tag?: string;
  category?: string;
  location?: string;
  contentHtml?: string;
  completedIn?: string;
  services?: string;
  client?: string;
  projectStructure?: string;
  visibilitySettings?: string;
  servicesConsultant?: string;
  quote?: {
    text: string;
    author: string;
    authorRole: string;
    authorAvatar: string;
  };
  gallery?: string[];
  [key: string]: any;
};

export function getAllPosts(type: string): PostData[] {
  const dir = path.join(contentDirectory, type);
  if (!fs.existsSync(dir)) return [];
  
  const fileNames = fs.readdirSync(dir);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(dir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    } as PostData;
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(type: string, slug: string): Promise<PostData> {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { [key: string]: any }),
  };
}
