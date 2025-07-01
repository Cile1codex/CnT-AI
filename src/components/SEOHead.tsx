import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../hooks/useLanguage';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords }) => {
  const { getAlternateUrl } = useLanguage();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Hreflang tags for SEO */}
      <link rel="alternate" hreflang="en" href={getAlternateUrl('en')} />
      <link rel="alternate" hreflang="mk" href={getAlternateUrl('mk')} />
      <link rel="alternate" hreflang="x-default" href={getAlternateUrl('en')} />
      
      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={getAlternateUrl('en')} />
      <meta property="og:image" content="/image.png" />
      
      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/image.png" />
    </Helmet>
  );
};