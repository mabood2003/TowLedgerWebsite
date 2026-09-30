const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = configuredUrl
  ? configuredUrl.replace(/\/$/, '')
  : vercelProductionUrl
    ? `https://${vercelProductionUrl}`
    : 'http://localhost:3000';
