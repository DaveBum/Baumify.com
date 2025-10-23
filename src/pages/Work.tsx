import WorkInProgress from "./WorkInProgress";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

const Work = () => {
  useSEO(SEO_CONFIG.work);
  
  return <WorkInProgress pageName="Our Work" />;
};

export default Work;
