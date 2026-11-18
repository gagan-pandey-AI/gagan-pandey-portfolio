const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

if (configuredSiteUrl) {
  const parsedSiteUrl = new URL(configuredSiteUrl);

  if (
    !["http:", "https:"].includes(parsedSiteUrl.protocol) ||
    parsedSiteUrl.username ||
    parsedSiteUrl.password ||
    parsedSiteUrl.pathname !== "/" ||
    parsedSiteUrl.search ||
    parsedSiteUrl.hash
  ) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an absolute http(s) origin without a path, query, or fragment.",
    );
  }
}

export const siteUrl = configuredSiteUrl
  ? new URL(configuredSiteUrl).origin
  : undefined;
