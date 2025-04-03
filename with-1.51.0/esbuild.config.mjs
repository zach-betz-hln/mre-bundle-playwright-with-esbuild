import * as esbuild from "esbuild";

console.log("Bundling code");

await esbuild.build({
	logLevel: "info",
	inject: ["./esbuild.cjs-shim.mjs"],
	external: [
		// see https://github.com/microsoft/playwright/issues/33031#issuecomment-2404366111
		"chromium-bidi",
	],
	entryPoints: ["./src/index.mjs"],
	bundle: true,
	platform: "node",
	format: "esm",
	outfile: "./dist/index.mjs",
});
