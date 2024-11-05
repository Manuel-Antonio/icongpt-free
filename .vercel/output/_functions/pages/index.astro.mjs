/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as addAttribute, f as renderHead, g as renderSlot, b as createAstro, h as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BGrOz9vT.mjs';
import { useState, useEffect, useMemo } from 'preact/hooks';
import { jsx, jsxs } from 'preact/jsx-runtime';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Magtanio/Documents/PROYECTOS/app-icon-nest/src/layouts/Layout.astro", void 0);

const BookmarkIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": strokeWidth,
  stroke: "currentColor",
  width,
  height,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: jsx("path", {
    d: "M6 2h12a2 2 0 0 1 2 2v16l-8-4-8 4V4a2 2 0 0 1 2-2z"
  })
});

const DeleteIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width,
  height,
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M3 6h18"
  }), jsx("path", {
    d: "M8 6v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), jsx("path", {
    d: "M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6"
  }), jsx("path", {
    d: "M10 11v6"
  }), jsx("path", {
    d: "M14 11v6"
  })]
});
const DeleteIconV2 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width,
  height,
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M3 6h18"
  }), jsx("path", {
    d: "M8 6v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), jsx("path", {
    d: "M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6"
  }), jsx("path", {
    d: "M6 10h12"
  }), jsx("path", {
    d: "M10 14h4"
  })]
});

const DownloadIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), jsx("path", {
    d: "M12 3v8"
  }), jsx("path", {
    d: "M15 9l-3 3-3-3"
  })]
});
const DownloadIconV2 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M21 9v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), " ", jsx("path", {
    d: "M12 3v8"
  }), jsx("path", {
    d: "M15 9l-3 3-3-3"
  })]
});

const HeartIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": strokeWidth,
  stroke: "currentColor",
  width,
  height,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: jsx("path", {
    d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
  })
});

const LockIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  stroke: "currentColor",
  width,
  height,
  children: jsx("path", {
    d: "M9 10V6a5 5 0 0 1 10 0v4m-2 0H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"
  })
});

const MagnifyingGlassIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width,
  height,
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("circle", {
    cx: "10",
    cy: "10",
    r: "6"
  }), jsx("line", {
    x1: "16",
    y1: "16",
    x2: "20",
    y2: "20"
  })]
});
const MagnifyingGlassIconV2 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width,
  height,
  stroke: "currentColor",
  "stroke-width": "1",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("circle", {
    cx: "10",
    cy: "10",
    r: "6"
  }), jsx("line", {
    x1: "14.5",
    y1: "14.5",
    x2: "19",
    y2: "19"
  })]
});

const MinusIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width,
  height,
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: jsx("path", {
    d: "M5 12h14"
  })
});

const PauseIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16"
  }), jsx("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16"
  })]
});

const PlayIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: jsx("polygon", {
    points: "5 3 19 12 5 21 5 3"
  })
});

const PlusIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width,
  height,
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M12 5v14"
  }), jsx("path", {
    d: "M5 12h14"
  })]
});

const ResetIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: jsx("path", {
    d: "M12 5V1L8 5l4 4V5a7 7 0 1 1 0 14 7 7 0 0 1-7-7h0"
  })
});

const SaveIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width,
  height,
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2z"
  }), jsx("path", {
    d: "M9 18h6"
  }), jsx("path", {
    d: "M9 14h6"
  })]
});
const SaveIconV2 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width,
  height,
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2z"
  }), jsx("path", {
    d: "M8 9h8"
  }), jsx("path", {
    d: "M8 13h4"
  })]
});

const StopIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: jsx("rect", {
    x: "6",
    y: "6",
    width: "12",
    height: "12"
  })
});

const UploadIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M21 9v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), jsx("path", {
    d: "M12 3v8"
  }), jsx("path", {
    d: "M15 6l-3-3-3 3"
  })]
});
const UploadIconV2 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), jsx("path", {
    d: "M12 3v8"
  }), jsx("path", {
    d: "M15 6l-3-3-3 3"
  })]
});

const ZoomInIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  xmlns: "http://www.w3.org/2000/svg",
  children: [jsx("circle", {
    cx: "10",
    cy: "10",
    r: "6"
  }), jsx("line", {
    x1: "10",
    y1: "7",
    x2: "10",
    y2: "13"
  }), jsx("line", {
    x1: "7",
    y1: "10",
    x2: "13",
    y2: "10"
  }), jsx("line", {
    x1: "14.5",
    y1: "14.5",
    x2: "19",
    y2: "19"
  })]
});
const ZoomInIconV2 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width,
  height,
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("circle", {
    cx: "10",
    cy: "10",
    r: "6"
  }), jsx("line", {
    x1: "10",
    y1: "7",
    x2: "10",
    y2: "13"
  }), jsx("line", {
    x1: "7",
    y1: "10",
    x2: "13",
    y2: "10"
  }), jsx("line", {
    x1: "16",
    y1: "16",
    x2: "20",
    y2: "20"
  })]
});

const ZoomOutIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width,
  height,
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("circle", {
    cx: "10",
    cy: "10",
    r: "6"
  }), jsx("line", {
    x1: "8",
    y1: "10",
    x2: "12",
    y2: "10"
  }), jsx("line", {
    x1: "16",
    y1: "16",
    x2: "20",
    y2: "20"
  })]
});
const ZoomOutIconV2 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  width,
  height,
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  fill: "none",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  xmlns: "http://www.w3.org/2000/svg",
  children: [jsx("circle", {
    cx: "10",
    cy: "10",
    r: "6"
  }), jsx("line", {
    x1: "7",
    y1: "10",
    x2: "13",
    y2: "10"
  }), jsx("line", {
    x1: "14.5",
    y1: "14.5",
    x2: "19",
    y2: "19"
  })]
});

const CloseIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M18 6L6 18"
  }), jsx("path", {
    d: "M6 6l12 12"
  })]
});

const CheckIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: jsx("path", {
    d: "M20 6L9 17l-5-5"
  })
});
const CheckIconV2 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), jsx("path", {
    d: "M9 12l2 2 4-4"
  })]
});

const DocumentIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
  }), jsx("path", {
    d: "M14 2v6h6"
  })]
});

const DocumentCheckIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
  }), jsx("path", {
    d: "M14 2v6h6"
  }), jsx("path", {
    d: "M9 14l2 2 4-4"
  })]
});

const DocumentPlusIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
  }), jsx("path", {
    d: "M14 2v6h6"
  }), jsx("path", {
    d: "M12 12v4"
  }), jsx("path", {
    d: "M10 14h4"
  })]
});

const DocumentMinusIconV1 = ({
  width = "24",
  height = "24",
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
  }), jsx("path", {
    d: "M14 2v6h6"
  }), jsx("path", {
    d: "M10 14h4"
  })]
});

const PencilIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  "stroke-width": strokeWidth,
  fill: "currentColor",
  children: jsx("path", {
    d: "M3 21h3.75l10.8-10.8-3.75-3.75L3 17.25V21zM20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3a1 1 0 0 0-1.4 0l-1.8 1.8 3.75 3.75 1.8-1.8z"
  })
});
const PencilIconV2 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  "stroke-width": strokeWidth,
  fill: "currentColor",
  children: [jsx("path", {
    d: "M3 18.75V21h2.25l11.1-11.1-2.25-2.25L3 18.75z"
  }), jsx("path", {
    d: "M16.5 4.5l1.5 1.5-2.25 2.25-1.5-1.5L16.5 4.5zm2.25-1.5l1.5 1.5a1 1 0 0 1 0 1.4l-1.5 1.5-2.25-2.25 1.5-1.5c.4-.4 1-.4 1.4 0z"
  })]
});
const PencilIconV3 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  "stroke-width": strokeWidth,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: jsx("path", {
    d: "M4 20h3.25L18.2 8.95a.75.75 0 0 0 0-1.05l-2.1-2.1a.75.75 0 0 0-1.05 0L4 16.75V20zm15.6-12.35l1.1-1.1a1 1 0 0 0 0-1.4l-1.75-1.75a1 1 0 0 0-1.4 0l-1.1 1.1 2.25 2.25z"
  })
});

const interactionList = [{
  component: jsx(MagnifyingGlassIconV1, {}),
  name: "magnifying-glass",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(MagnifyingGlassIconV2, {}),
  name: "magnifying-glass",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(ZoomOutIconV1, {}),
  name: "zoom-out",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(ZoomOutIconV2, {}),
  name: "zoom-out",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(ZoomInIconV1, {}),
  name: "zoom-in",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(ZoomInIconV2, {}),
  name: "zoom-in",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(PlusIconV1, {}),
  name: "plus",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(MinusIconV1, {}),
  name: "minus",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(DeleteIconV1, {}),
  name: "delete",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(DeleteIconV2, {}),
  name: "delete",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(SaveIconV1, {}),
  name: "save",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(SaveIconV2, {}),
  name: "save",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(DownloadIconV1, {}),
  name: "download",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(DownloadIconV2, {}),
  name: "download",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(UploadIconV1, {}),
  name: "upload",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(UploadIconV2, {}),
  name: "upload",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(HeartIconV1, {}),
  name: "heart",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(BookmarkIconV1, {}),
  name: "bookmark",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(LockIconV1, {}),
  name: "lock",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(PlayIconV1, {}),
  name: "play",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(ResetIconV1, {}),
  name: "reset",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(PauseIconV1, {}),
  name: "pause",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(StopIconV1, {}),
  name: "stop",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(CloseIconV1, {}),
  name: "close",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(CheckIconV1, {}),
  name: "check",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(CheckIconV2, {}),
  name: "check",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(DocumentIconV1, {}),
  name: "document",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(DocumentCheckIconV1, {}),
  name: "document-check",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(DocumentPlusIconV1, {}),
  name: "document-plus",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(DocumentMinusIconV1, {}),
  name: "document-minus",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(PencilIconV1, {}),
  name: "pencil",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(PencilIconV2, {}),
  name: "pencil",
  category: "interaction",
  style: "outline"
}, {
  component: jsx(PencilIconV3, {}),
  name: "pencil",
  category: "interaction",
  style: "outline"
}];

const CssIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  "stroke-width": strokeWidth,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: [jsx("path", {
    d: "M1.5 1.5h21L19.5 20.2 12 22.5 4.5 20.2 1.5 1.5z",
    fill: "#1572B6"
  }), jsx("path", {
    d: "M12 20l5.3-1.5 1.4-12.5h-14l.6 7.7h8.8L15.4 17l-3.4 1v2z",
    fill: "#fff"
  })]
});

const HtmlIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  "stroke-width": strokeWidth,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  children: [jsx("path", {
    d: "M2 2h20l-1.9 17.8L12 22l-8.1-2.2L2 2z",
    fill: "#e34f26"
  }), jsx("path", {
    d: "M12 20l5.3-1.5L18 5H6l.7 7.7h8.8L15.4 17l-3.4 1V20z",
    fill: "#fff"
  })]
});

const programmingList = [{
  component: jsx(HtmlIconV1, {}),
  name: "html",
  category: "programming",
  style: "outline"
}, {
  component: jsx(CssIconV1, {}),
  name: "css",
  category: "programming",
  style: "outline"
}];

const FacebookIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: jsx("path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
  })
});

const InstagramIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5",
    ry: "5"
  }), jsx("path", {
    d: "M16 11.37a4 4 0 1 1-4.75-4.75A4 4 0 0 1 16 11.37z"
  }), jsx("path", {
    d: "M17.5 6.5h.01"
  })]
});

const LinkedInIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-1v9h-4V9h4v3"
  }), jsx("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), jsx("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  })]
});

const TwitterIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: jsx("path", {
    d: "M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
  })
});

const YoutubeIconV1 = ({
  width = 24,
  height = 24,
  strokeWidth = "1"
}) => jsxs("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": strokeWidth,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  children: [jsx("path", {
    d: "M22.54 6.42A2.42 2.42 0 0 0 21.13 5C19.14 4.6 12 4.6 12 4.6s-7.14 0-9.13.4a2.42 2.42 0 0 0-1.41 1.42A25.36 25.36 0 0 0 1 12a25.36 25.36 0 0 0 .46 5.58 2.42 2.42 0 0 0 1.41 1.42c1.99.4 9.13.4 9.13.4s7.14 0 9.13-.4a2.42 2.42 0 0 0 1.41-1.42A25.36 25.36 0 0 0 23 12a25.36 25.36 0 0 0-.46-5.58z"
  }), jsx("polygon", {
    points: "9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
  })]
});

const socialNetworksList = [{
  component: jsx(FacebookIconV1, {}),
  name: "facebook",
  category: "social-networks",
  style: "outline"
}, {
  component: jsx(TwitterIconV1, {}),
  name: "twitter",
  category: "social-networks",
  style: "outline"
}, {
  component: jsx(InstagramIconV1, {}),
  name: "instagram",
  category: "social-networks",
  style: "outline"
}, {
  component: jsx(LinkedInIconV1, {}),
  name: "linkedin",
  category: "social-networks",
  style: "outline"
}, {
  component: jsx(YoutubeIconV1, {}),
  name: "youtube",
  category: "social-networks",
  style: "outline"
}];

const iconsList = [...interactionList, ...socialNetworksList, ...programmingList];

const IconCard = ({
  idSvg,
  icon,
  name
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    const svgContent = document.getElementById(idSvg)?.innerHTML;
    if (svgContent) {
      navigator.clipboard.writeText(svgContent).then(() => setIsCopied(true)).catch(() => alert("Failed to copy SVG code."));
    }
  };
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);
  return jsxs("div", {
    className: "relative  group focus:outline-none max-w-min ",
    tabIndex: "0",
    children: [jsxs("div", {
      className: "flex relative items-center border rounded justify-center w-28 h-28 mx-auto text-slate-800",
      children: [jsxs("div", {
        className: "flex flex-col items-center justify-center",
        children: [jsx("span", {
          id: idSvg,
          children: icon
        }), jsx("p", {
          className: `absolute text-green-600 z-10 top-0 rounded text-sm font-semibold transform transition-all duration-300 ${isCopied ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0"}`,
          children: "Copied!"
        })]
      }), jsx("button", {
        type: "button",
        onClick: copyToClipboard,
        "aria-label": `Copy SVG for ${name}`,
        className: `absolute bottom-2 text-sm w-20 opacity-0 translate-y-4 border rounded py-0.5 px-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ${isCopied ? "hidden" : ""}`,
        children: jsx("span", {
          className: "text-slate-800 font-medium text-xs tracking-wide",
          children: "Copy SVG"
        })
      })]
    }), jsx("div", {
      className: "relative",
      children: jsx("p", {
        className: `absolute mt-3 text-slate-600 px-1 font-semibold text-sm text-center w-full h-12  transition-opacity duration-100 transform overflow-hidden`,
        children: name
      })
    })]
  });
};

const categoriesIcon = ["Social Media", "Navigation", "Actions", "Media", "Technology", "Commerce", "Health", "Finance", "Education", "Weather", "Transportation", "Security", "Settings", "Content", "Events", "Art and Entertainment", "Nature", "Communication", "Networks", "General Use"];

const stylesIcon = ["solid", "outline"];

const IconControls = ({
  setSelectedStyles,
  setSelectedCategories,
  setStrokeWidth
}) => {
  const [style, setStyle] = useState("solid");
  const [selectedStroke, setSelectedStroke] = useState([]);
  const handleStyleChange = (selectedStyle) => {
    setStyle(selectedStyle);
    setSelectedStyles([selectedStyle]);
  };
  const handleStrokeChange = (value) => {
    const updatedStroke = selectedStroke.includes(value) ? selectedStroke.filter((stroke) => stroke !== value) : [...selectedStroke, value];
    setSelectedStroke(updatedStroke);
    const maxStroke = updatedStroke.length > 0 ? Math.max(...updatedStroke) : 0;
    setStrokeWidth(maxStroke);
  };
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories((prevCategories) => event.target.checked ? [...prevCategories, category] : prevCategories.filter((c) => c !== category));
  };
  return jsxs("div", {
    className: "flex flex-wrap items-center justify-between gap-6 ",
    children: [jsx("div", {
      className: "flex items-center space-x-4",
      children: stylesIcon.map((styleOption) => jsx("button", {
        type: "button",
        onClick: () => handleStyleChange(styleOption),
        className: `px-4 py-2 rounded-lg border ${style === styleOption ? "bg-gray-800 text-white" : "bg-gray-200"}`,
        children: styleOption.charAt(0).toUpperCase() + styleOption.slice(1)
      }, styleOption))
    }), jsxs("div", {
      className: "flex items-start flex-col gap-1",
      children: [jsx("label", {
        className: "text-lg font-medium",
        children: "Stroke:"
      }), jsxs("div", {
        className: "flex space-x-2",
        children: [jsxs("label", {
          className: "space-x-2",
          children: [jsx("input", {
            type: "checkbox",
            value: 1,
            checked: selectedStroke.includes(1),
            onChange: () => handleStrokeChange(1)
          }), jsx("span", {
            children: "Light"
          })]
        }), jsxs("label", {
          className: "space-x-2",
          children: [jsx("input", {
            type: "checkbox",
            value: 1.5,
            checked: selectedStroke.includes(1.5),
            onChange: () => handleStrokeChange(1.5)
          }), jsx("span", {
            children: "Normal"
          })]
        }), jsxs("label", {
          className: "space-x-2",
          children: [jsx("input", {
            type: "checkbox",
            value: 2,
            checked: selectedStroke.includes(2),
            onChange: () => handleStrokeChange(2)
          }), jsx("span", {
            children: "Bold"
          })]
        })]
      })]
    }), jsxs("div", {
      className: "flex items-start flex-col gap-1",
      children: [jsx("label", {
        className: "text-lg font-medium",
        children: "Category:"
      }), jsxs("select", {
        onChange: handleCategoryChange,
        className: "p-2 border rounded-md",
        children: [jsx("option", {
          value: "",
          children: "All"
        }), categoriesIcon.map((categoryIcon) => jsx("option", {
          value: categoryIcon,
          children: categoryIcon
        }, categoryIcon))]
      })]
    })]
  });
};

function IconLibrary() {
  const [selectedStyles, setSelectedStyles] = useState(["outline"]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchIcon, setSearchIcon] = useState("");
  const [strokeWidth, setStrokeWidth] = useState(0);
  const matchesStyles = (icon) => {
    return selectedStyles.length === 0 || selectedStyles.includes(icon.style);
  };
  const matchesCategories = (icon) => {
    return selectedCategories.length === 0 || selectedCategories.includes(icon.category);
  };
  const matchesSearch = (icon) => {
    return searchIcon.trim() === "" || icon.name.toLowerCase().includes(searchIcon.toLowerCase());
  };
  const matchesStrokeWidth = (icon) => {
    return strokeWidth === 0 || icon.strokeWidth <= strokeWidth;
  };
  const filterIcons = (icon) => {
    return matchesStyles(icon) && matchesCategories(icon) && matchesSearch(icon) && matchesStrokeWidth(icon);
  };
  const filteredIcons = useMemo(() => iconsList.filter(filterIcons), [iconsList, selectedStyles, selectedCategories, searchIcon, strokeWidth]);
  return jsxs("section", {
    className: "font-sans",
    children: [jsx("div", {
      children: jsxs("div", {
        className: "relative flex items-center",
        children: [jsx("input", {
          type: "text",
          id: "FirstName",
          name: "first_name",
          placeholder: "Search icons",
          className: "mt-1 w-full rounded-md p-3 pl-10 border-gray-200 bg-white text-sm text-gray-700 border",
          value: searchIcon,
          onInput: (e) => setSearchIcon(e.target.value)
        }), jsx("span", {
          className: "absolute inset-y-0 left-0 flex items-center pl-3",
          children: jsx(MagnifyingGlassIconV2, {
            width: 24,
            height: 24
          })
        })]
      })
    }), jsx("div", {
      className: "my-4",
      children: jsx(IconControls, {
        setSelectedStyles,
        setSelectedCategories,
        setStrokeWidth
      })
    }), filteredIcons.length ? jsx("div", {
      className: "grid grid-cols-7 gap-x-4 gap-y-16",
      children: filteredIcons.map((icon, index) => jsx(IconCard, {
        idSvg: index,
        icon: icon.component,
        name: icon.name,
        svgCode: icon
        // Extrae el contenido SVG
      }, index))
    }) : jsx("p", {
      className: "text-center text-xl mt-4",
      children: "-- No se encontró resultados --"
    })]
  });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto p-4"> <div class="relative overflow-hidden py-24 px-6 sm:px-12 lg:px-16 flex flex-col items-center text-center"> <div class="relative z-10 max-w-4xl mx-auto"> <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-purple-600 animate-fadeIn mb-4 tracking-tight">
IconGPT
</h1> <h2 class="text-lg sm:text-2xl lg:text-2xl text-slate-800 font-semibold leading-relaxed animate-fadeInSlow max-w-2xl mx-auto mb-8 uppercase tracking-wide">
Iconos hermosos, creados en su mayoría con la ayuda de ChatGPT.
</h2> </div> </div> ${renderComponent($$result2, "IconLibrary", IconLibrary, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Magtanio/Documents/PROYECTOS/app-icon-nest/src/components/IconLibrary", "client:component-export": "default" })} </main> ` })}`;
}, "C:/Users/Magtanio/Documents/PROYECTOS/app-icon-nest/src/pages/index.astro", void 0);

const $$file = "C:/Users/Magtanio/Documents/PROYECTOS/app-icon-nest/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
