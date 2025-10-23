import WorkInProgress from "./WorkInProgress";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

const Blog = () => {
  useSEO(SEO_CONFIG.blog);
  
  return <WorkInProgress pageName="Blog" />;
};

export default Blog;
