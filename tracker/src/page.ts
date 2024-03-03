export const getPageHeight = (): number => {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  );
};

export const getViewportDimensions = (): { width: number; height: number } => {
  const width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );
  const height = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  );

  return { width, height };
};

export const collectPageInfo = (): object => {
  return {
    pageHeight: getPageHeight(),
    viewport: getViewportDimensions(),
  };
};
