import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      /*
      ============================================================
      TypeScript
      ============================================================
      */

      // Don't allow any
      "@typescript-eslint/no-explicit-any": "error",

      // Prefer type imports
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
        },
      ],

      // Prevent empty object types
      "@typescript-eslint/no-empty-object-type": "error",

      // Warn if exported functions don't have explicit return types
      "@typescript-eslint/explicit-module-boundary-types": "off",

      // Prevent unused variables
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      /*
      ============================================================
      JavaScript
      ============================================================
      */

      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],

      eqeqeq: ["error", "always"],

      "no-debugger": "error",

      "prefer-const": "error",

      "no-var": "error",

      curly: ["error", "all"],

      "prefer-template": "error",

      "object-shorthand": ["error", "always"],

      /*
      ============================================================
      Imports
      ============================================================
      */

      "sort-imports": [
        "warn",
        {
          ignoreDeclarationSort: true,
        },
      ],

      /*
      ============================================================
      React
      ============================================================
      */

      "react/jsx-key": "error",

      "react/self-closing-comp": "warn",

      /*
      ============================================================
      Next.js
      ============================================================
      */

      "@next/next/no-img-element": "error",
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "coverage/**",
    "next-env.d.ts",
  ]),
]);