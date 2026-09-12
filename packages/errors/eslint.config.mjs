import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["node_modules/**", "coverage/**"]),
  ...tseslint.configs.recommended,
]);
