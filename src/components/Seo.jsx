import { Helmet } from 'react-helmet-async';
import { site } from '../data/siteData';

export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${site.name}` : site.name;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
