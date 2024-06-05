const useMetaData = (children) => {
  document.title = children ? `${children} | Social Link's` : "Social Link's";
};

export default useMetaData;
