import { useEffect, useState } from "preact/hooks";

const IconCard = ({ idSvg, icon, name }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    const svgContent = document.getElementById(idSvg)?.innerHTML;

    if (svgContent) {
      navigator.clipboard
        .writeText(svgContent)
        .then(() => setIsCopied(true))
        .catch(() => alert("Failed to copy SVG code."));
    }
  };

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 600); // Texto de copiado se desvanece después de 500ms
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  return (
    <div
      className="relative  group focus:outline-none max-w-min "
      tabIndex="0"
    >
      {/* Icon display */}
      <div className="flex relative items-center border rounded justify-center w-28 h-28 mx-auto text-slate-800">
        <div className="flex flex-col items-center justify-center">
          {/* Icono sin efectos adicionales */}
          <span id={idSvg}>{icon}</span>

          {/* Texto de confirmación de copiado */}
          <p
            className={`absolute text-green-600 z-10 top-0 rounded text-sm font-semibold transform transition-all duration-300 ${
              isCopied ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0"
            }`}
          >
            Copied!
          </p>
        </div>

        {/* Botón de copiado */}
        <button
          type="button"
          onClick={copyToClipboard}
          aria-label={`Copy SVG for ${name}`}
          className={`absolute bottom-2 text-sm w-20 opacity-0 translate-y-4 border rounded py-0.5 px-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ${
            isCopied ? "hidden" : ""
          }`}
        >
          <span className="text-slate-800 font-medium text-xs tracking-wide">
            Copy SVG
          </span>
        </button>
      </div>

      <div className="relative">
        <p
          className={`absolute mt-3 text-slate-600 px-1 font-semibold text-sm text-center w-full h-12  transition-opacity duration-100 transform overflow-hidden`}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default IconCard;
