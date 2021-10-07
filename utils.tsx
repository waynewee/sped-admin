export const getBreadCrumbsFromPath = (pathname: string) => {
  const paths = pathname.split("/").slice(1);

  let currentPath = "";

  const breadCrumbs = [];

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];

    currentPath += `/${path}`;

    breadCrumbs.push({
      label: path.split("-").join(" "),
      href: currentPath,
    });
  }

  return breadCrumbs;
};
