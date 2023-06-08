import path from "path";
const isGitHubPages = false;
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

let build = {
  outDir: "../dist",
  assetsDir: "./"
}

if (process.env.SKIP_MINIFY) {
  console.log("nos saltamos la minificación!" + process.env.SKIP_MINIFY);
  build.cssMinify = false;
  build.minify = false;
}

export default {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build
};
