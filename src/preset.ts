import { color, Preset } from "apply";
import fs from "fs";

Preset.setName("Graphql preset").group((preset) => {
  preset
    .editNodePackages()
    .add("apollo-server-lambda", "^2.24.1")
    .add("graphql", "^15.5.0");
  if (fs.existsSync("tsconfig.json")) {
    console.log(`${color.magenta("Detected typescript project")}`);
    preset.extract("ts");
  } else {
    preset.extract("js");
  }

  preset.instruct(
    `Run ${color.magenta("npm install")}, ${color.magenta(
      "pnpm install"
    )}, or ${color.magenta("yarn")} to install dependencies`
  );
});
