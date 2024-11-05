import { useState, useMemo } from "preact/hooks";
import { iconsList } from "../data/icons.data";
import IconCard from "./IconCard";
import { MagnifyingGlassIconV2 } from "./icons/interaction/MagnifyingGlassIcon";
import IconControls from "./IconControls";

export default function IconLibrary() {
  const [selectedStyles, setSelectedStyles] = useState(["outline"]); // Inicialmente se mantiene el estilo "solid"
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchIcon, setSearchIcon] = useState("");
  const [strokeWidth, setStrokeWidth] = useState(0); // Inicia en 0

  // Función para verificar si un icono coincide con los estilos seleccionados
  const matchesStyles = (icon) => {
    return selectedStyles.length === 0 || selectedStyles.includes(icon.style);
  };

  // Función para verificar si un icono coincide con las categorías seleccionadas
  const matchesCategories = (icon) => {
    return (
      selectedCategories.length === 0 ||
      selectedCategories.includes(icon.category)
    );
  };

  // Función para verificar si un icono coincide con el texto de búsqueda
  const matchesSearch = (icon) => {
    return (
      searchIcon.trim() === "" ||
      icon.name.toLowerCase().includes(searchIcon.toLowerCase())
    );
  };

  // Función para verificar si un icono coincide con el grosor de trazo seleccionado
  const matchesStrokeWidth = (icon) => {
    return strokeWidth === 0 || icon.strokeWidth <= strokeWidth;
  };

  // Función principal de filtrado que combina todos los filtros
  const filterIcons = (icon) => {
    return (
      matchesStyles(icon) &&
      matchesCategories(icon) &&
      matchesSearch(icon) &&
      matchesStrokeWidth(icon)
    );
  };

  // Aplicamos el filtrado solo cuando los valores cambian para optimizar el rendimiento
  const filteredIcons = useMemo(
    () => iconsList.filter(filterIcons),
    [iconsList, selectedStyles, selectedCategories, searchIcon, strokeWidth]
  );

  return (
    <section className="font-sans">
      <div>
        <div className="relative flex items-center">
          <input
            type="text"
            id="FirstName"
            name="first_name"
            placeholder="Search icons"
            className="mt-1 w-full rounded-md p-3 pl-10 border-gray-200 bg-white text-sm text-gray-700 border"
            value={searchIcon}
            onInput={(e) => setSearchIcon(e.target.value)}
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIconV2 width={24} height={24} />
          </span>
        </div>
      </div>

      <div className="my-4">
        <IconControls
          setSelectedStyles={setSelectedStyles}
          setSelectedCategories={setSelectedCategories}
          setStrokeWidth={setStrokeWidth}
        />
      </div>
      {filteredIcons.length ? (
        <div className="grid grid-cols-7 gap-x-4 gap-y-16">
          {filteredIcons.map((icon, index) => (
            <IconCard
              key={index}
              idSvg={index}
              icon={icon.component}
              name={icon.name}
              svgCode={icon} // Extrae el contenido SVG
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl mt-4">
          -- No se encontró resultados --
        </p>
      )}
    </section>
  );
}
