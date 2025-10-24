import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  noindex?: boolean;
}

export const useSEO = ({
  title = 'Baumify - Elite Software Development & AI Solutions',
  description = 'Three elite architects building intelligent software solutions. Full-stack development, AI/ML integration, custom web & mobile apps.',
  keywords = 'software development, AI development, machine learning, full-stack development',
  ogImage = 'https://baumify.com/og-image.jpg',
  canonical,
  noindex = false,
}: SEOProps = {}) => {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', `https://baumify.com${location.pathname}`, true);

    // Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Robots
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Canonical URL
    const canonicalUrl = canonical || `https://baumify.com${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    
    canonicalLink.href = canonicalUrl;

  }, [title, description, keywords, ogImage, canonical, location.pathname, noindex]);
};

// Pre-defined SEO configs for each page
export const SEO_CONFIG = {
  home: {
    title: 'Baumify - Elite Software Development | David Baum, Omer Zalman, Akiva Levine',
    description: 'Baumify: Top-rated software development company. David Baum, Omer Zalman, and Akiva Levine deliver custom AI solutions, full-stack web & mobile apps. Expert React, Python, TypeScript developers. Hire the best software engineers.',
    keywords: 'Baumify, David Baum, Omer Zalman, Akiva Levine, software development company, best software developers, hire software engineers, AI development, full-stack development, React developers, Python developers, TypeScript, custom software, top software company, elite software architects',
  },
  about: {
    title: 'About Baumify | David Baum, Omer Zalman, Akiva Levine - Elite Software Architects',
    description: 'Meet Baumify founders: David Baum (Lead Architect, OS & compiler expert), Omer Zalman (Senior AI Engineer, 5+ years), Akiva Levine (AI Architect). Top software development team specializing in AI/ML, full-stack, and automation.',
    keywords: 'David Baum software developer, Omer Zalman AI engineer, Akiva Levine automation, Baumify team, software architects, AI engineers, full-stack developers, elite development team, best software engineers, top tech talent',
  },
  services: {
    title: 'Software Development Services | Baumify - Web, Mobile, AI Solutions',
    description: 'Premium software development services by Baumify. Custom web & mobile apps, AI/ML integration, full-stack development, automation. React, Next.js, Python, TypeScript. From MVP to enterprise scale. Free consultation available.',
    keywords: 'software development services, web development, mobile app development, AI integration services, machine learning services, custom software development, MVP development, enterprise software, React development services, Python development, hire developers, software consulting',
  },
  contact: {
    title: 'Contact Baumify | Free Consultation - David Baum +1-901-517-6300',
    description: 'Contact Baumify for elite software development. Speak with David Baum directly at +1 (901) 517-6300 or email david.baum461@gmail.com. Fast response, expert guidance, transparent pricing. Free consultation available.',
    keywords: 'contact Baumify, hire Baumify, David Baum contact, software development quote, free consultation, hire software developers, custom software inquiry, talk to developers, software development company contact',
  },
  work: {
    title: 'Baumify Portfolio | Software Development Projects & Case Studies',
    description: 'Explore Baumify portfolio: Elite software solutions, web apps, mobile applications, AI systems. Real-world projects by David Baum, Omer Zalman, Akiva Levine. See our work and results.',
    keywords: 'Baumify portfolio, software development projects, web app examples, mobile app portfolio, AI projects, case studies, development showcase, Baumify work, software examples',
  },
  blog: {
    title: 'Baumify Blog | Software Development, AI & Engineering Insights',
    description: 'Expert software development insights from Baumify team. AI/ML tutorials, web development tips, engineering best practices by David Baum, Omer Zalman, and Akiva Levine.',
    keywords: 'software development blog, Baumify blog, tech articles, AI insights, programming tutorials, web development tips, engineering blog, David Baum blog, coding tutorials',
  },
};
