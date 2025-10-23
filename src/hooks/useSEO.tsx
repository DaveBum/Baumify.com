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
    title: 'Baumify - Elite Software Development & AI Solutions | Custom Web & Mobile Apps',
    description: 'Three elite architects building intelligent software solutions. Full-stack development, AI/ML integration, custom web & mobile apps. Fast delivery, surgical precision, relentless quality.',
    keywords: 'software development, AI development, machine learning, full-stack development, web development, mobile app development, custom software, React, Python, TypeScript, neural networks',
  },
  about: {
    title: 'About Baumify - Meet Our Elite Development Team | Software Architects',
    description: 'Meet David Baum, Omer Zalman, and Akiva Levine - three elite architects with combined expertise in AI, full-stack development, and system architecture. Learn about our team and philosophy.',
    keywords: 'software architects, AI engineers, full-stack developers, development team, David Baum, Omer Zalman, Akiva Levine, tech team',
  },
  services: {
    title: 'Software Development Services | Web, Mobile & AI Solutions - Baumify',
    description: 'Custom software development services: Web & mobile apps, AI/ML integration, automation, full-stack development. From MVP to enterprise scale. Contact us for a free consultation.',
    keywords: 'software development services, web development, mobile app development, AI integration, machine learning services, custom software, MVP development, enterprise software',
  },
  contact: {
    title: 'Contact Baumify - Get a Free Consultation | Software Development Quote',
    description: 'Ready to build something exceptional? Contact Baumify for a free consultation. Fast response, transparent pricing, expert guidance. Call +1 (901) 517-6300 or email us.',
    keywords: 'contact software developers, free consultation, software development quote, hire developers, custom software inquiry',
  },
  work: {
    title: 'Our Work - Software Development Portfolio | Baumify Projects',
    description: 'Explore our portfolio of elite software solutions. Web apps, mobile applications, AI systems, and custom solutions built with precision and delivered fast.',
    keywords: 'software portfolio, development projects, web app examples, mobile app portfolio, AI projects, case studies',
  },
  blog: {
    title: 'Baumify Blog - Software Development Insights & Tech Articles',
    description: 'Expert insights on software development, AI/ML, web technologies, and engineering best practices from the Baumify team.',
    keywords: 'software development blog, tech articles, AI insights, programming tutorials, web development tips, engineering blog',
  },
};
