const generateUnique = () => {
  return (new Date().getTime() + Math.random() * 10000).toString(16);
};

export default generateUnique;
