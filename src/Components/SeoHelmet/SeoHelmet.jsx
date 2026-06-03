import { Helmet } from "react-helmet";

const SITE_URL = "https://qrypton.com";

function absoluteUrl(pathOrUrl) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${encodeURI(path)}`;
}

/**
 * Open Graph + Twitter Card tags for social previews (react-helmet updates <head> per route).
 */
export default function SeoHelmet({
  title = "Qrypton",
  description = "Qrypton offers full stack development, design, branding, and more. We leverage React, Node.js, and AWS to deliver scalable digital solutions. Contact us today!",
  path = "/",
  image = "/Images/project-section-image.webp",
  type = "website",
  imageAlt = "Qrypton Design Studio",
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Qrypton" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
