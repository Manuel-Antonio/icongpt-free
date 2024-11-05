import { useState } from "preact/hooks";
import { categoriesIcon } from "../data/categories_icon.data";
import { stylesIcon } from "../data/styles_icon.data";

const IconControls = ({
  setSelectedStyles,
  setSelectedCategories,
  setStrokeWidth,
}) => {
  const [style, setStyle] = useState("solid");
  const [selectedStroke, setSelectedStroke] = useState([]);

  const handleStyleChange = (selectedStyle) => {
    setStyle(selectedStyle);
    setSelectedStyles([selectedStyle]); // Se mantiene un solo estilo seleccionado
  };

  const handleStrokeChange = (value) => {
    const updatedStroke = selectedStroke.includes(value)
      ? selectedStroke.filter((stroke) => stroke !== value)
      : [...selectedStroke, value];

    setSelectedStroke(updatedStroke);
    const maxStroke = updatedStroke.length > 0 ? Math.max(...updatedStroke) : 0;
    setStrokeWidth(maxStroke); // Actualiza el grosor en el componente padre
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prevCategories) =>
      event.target.checked
        ? [...prevCategories, category]
        : prevCategories.filter((c) => c !== category)
    );
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 ">
      {/* Style Selection */}
      <div className="flex items-center space-x-4">
        {stylesIcon.map((styleOption) => (
          <button
            key={styleOption}
            type="button"
            onClick={() => handleStyleChange(styleOption)}
            className={`px-4 py-2 rounded-lg border ${
              style === styleOption ? "bg-gray-800 text-white" : "bg-gray-200"
            }`}
          >
            {styleOption.charAt(0).toUpperCase() + styleOption.slice(1)}
          </button>
        ))}
      </div>

      {/* Stroke Width Control */}
      <div className="flex items-start flex-col gap-1">
        <label className="text-lg font-medium">Stroke:</label>
        <div className="flex space-x-2">
          <label className="space-x-2">
            <input
              type="checkbox"
              value={1}
              checked={selectedStroke.includes(1)}
              onChange={() => handleStrokeChange(1)}
            />
            <span>Light</span>
          </label>
          <label className="space-x-2">
            <input
              type="checkbox"
              value={1.5}
              checked={selectedStroke.includes(1.5)}
              onChange={() => handleStrokeChange(1.5)}
            />
            <span>Normal</span>
          </label>
          <label className="space-x-2">
            <input
              type="checkbox"
              value={2}
              checked={selectedStroke.includes(2)}
              onChange={() => handleStrokeChange(2)}
            />
            <span>Bold</span>
          </label>
        </div>
      </div>

      {/* Category Selection */}
      <div className="flex items-start flex-col gap-1">
        <label className="text-lg font-medium">Category:</label>
        <select onChange={handleCategoryChange} className="p-2 border rounded-md">
          <option value="">All</option>
          {categoriesIcon.map((categoryIcon) => (
            <option key={categoryIcon} value={categoryIcon}>
              {categoryIcon}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default IconControls;
