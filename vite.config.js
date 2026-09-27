import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readdirSync, existsSync } from "node:fs";
import { resolve, relative } from "node:path";
function mediaManifest() {
  const id = "\0virtual:media";
  const root = resolve("public");
  function files(dir) {
    return existsSync(dir)
      ? readdirSync(dir, { withFileTypes: true }).flatMap((f) =>
          f.isDirectory()
            ? files(resolve(dir, f.name))
            : [relative(root, resolve(dir, f.name)).split("\\").join("/")],
        )
      : [];
  }
  return {
    name: "local-media-manifest",
    resolveId(source) {
      if (source === "virtual:media") return id;
    },
    load(source) {
      if (source === id)
        return `export default ${JSON.stringify(files(resolve(root, "assets")))};`;
    },
    configureServer(server) {
      server.watcher.on("all", (event, path) => {
        if (path.startsWith(root) && ["add", "unlink"].includes(event)) {
          const mod = server.moduleGraph.getModuleById(id);
          if (mod) server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}
export default defineConfig({
  plugins: [react(), mediaManifest()],
  base: "./",
});
