import fs from "node:fs";

// Working from this commit:
// https://github.com/microsoft/playwright/commit/f70f92d5cdecbebd01b18886fd7d45d1c9e7d980#diff-1e91dc5d3657bc30c6a597fb462547a68dd0f53ba1408dc791e8c10ec4646c0c

console.log("Fixing dist");

fs.mkdirSync("dist/dir-1/dir-2/dir-3", { recursive: true });
fs.copyFileSync("dist/index.mjs", "dist/dir-1/dir-2/dir-3/index.mjs");
fs.rmSync("dist/index.mjs");

fs.writeFileSync("dist/package.json", JSON.stringify({}), {
	encoding: "utf-8",
});
