import IconTemplate from "../components/IconTemplate";

export const createIcons = (iconList) => {
  return iconList.map(icon => {
    return {
      component: (
        <IconTemplate 
          elements={icon.elements} 
          style={icon.style} 
        />
      ),
      name: icon.name,
      category: icon.category,
      style: icon.style,
    };
  });
};
