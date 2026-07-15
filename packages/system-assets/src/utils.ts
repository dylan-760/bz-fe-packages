/**
 * Generate asset URL
 * @param path Asset path
 * @returns Asset URL
 */
export const generateAssetUrl = (path: string): string => {
  return `/frontend/${path}`;
};

/**
 * get public asset url，server at /public/frontend/
 * @param path path follow /public/frontend/
 * @returns
 */
export const useS3 = (path: string): string => {
  return generateAssetUrl(path);
};
