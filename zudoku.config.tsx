import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Task API",
      width: "130px",
    },
  },
  basePath: "/task-api-docs",
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: ["installation", "authorization", "about"],
    },
    {
      type: "category",
      label: "Technical Specification (SRS)",
      items: [
        "srs/overview",
        "srs/description",
        "srs/functional",
        "srs/non-functional",
        "srs/interfaces",
        "srs/acceptance",
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
    {
      type: "link",
      to: "/about",
      label: "About",
    },
  ],
  redirects: [{ from: "/", to: "/installation" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;
