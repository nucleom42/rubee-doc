// esbuild.config.js (CommonJS style)
const esbuild = require("esbuild");
const inlineCss = require("esbuild-plugin-inline-css");

const path = require("path");
const fs = require("fs");

const buildOptions = {
  entryPoints: ["js/app.js"], // Can be .ts or .tsx too
  outfile: "js/bundle.js",
  bundle: true,
  format: "esm",
  loader: {
    ".js": "jsx",
    ".jsx": "jsx",
    ".ts": "ts",
    ".tsx": "tsx",
    ".css": "css",
  },
  plugins: [inlineCss()],
  allowOverwrite: true,
  minify: true,
  sourcemap: false,
};

async function run() {
  if (process.argv.includes("--watch")) {
    const ctx = await esbuild.context(buildOptions);
    await ctx.watch();
    console.log("👀 Watching for changes...");
  } else if(process.argv.includes("--deploy")){
    const distDir = path.join(__dirname, "dist");

    const jsDir = path.join(distDir, "js");
    if (!fs.existsSync(jsDir)) {
      fs.mkdirSync(jsDir);
    }

    buildOptions.outfile = "dist/js/bundle.min.js";
    buildOptions.minify = true;

    await esbuild.build(buildOptions);
    
    // copy images
    const imagesDir = path.join(__dirname, "images");
    const distImagesDir = path.join(distDir, "images");
    if (!fs.existsSync(distImagesDir)) {
      fs.mkdirSync(distImagesDir);
    }
    
    fs.readdirSync(imagesDir).forEach((file) => {
      const srcPath = path.join(imagesDir, file);
      const destPath = path.join(distImagesDir, file);
      fs.copyFileSync(srcPath, destPath);
    });

    console.log("✅ Build complete");
  } else {
    await esbuild.build(buildOptions);
    console.log("✅ Build complete");
  }
}

run().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
