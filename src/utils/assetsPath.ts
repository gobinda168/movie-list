const getIconPath: (asset: string) => string = (asset: string) => {
  return `/assets/icons/${asset}`;
};
const getImagePath: (asset: string) => string = (asset: string) => {
  return `/assets/images/${asset}`;
};

const pathUtil = { getIconPath, getImagePath };
export default pathUtil;
