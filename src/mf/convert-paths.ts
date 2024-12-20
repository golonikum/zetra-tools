import { INDEX_PATHS } from "./paths";

/*
export * from "./src/components/atoms/Button"; => "./Button": "./src/components/atoms/Button",
*/
INDEX_PATHS.forEach((pathStr) => {
  const index1 = pathStr.lastIndexOf("/");
  const index2 = pathStr.lastIndexOf('"');
  const name = pathStr.substring(index1 + 1, index2);

  console.log(
    pathStr.replace("export * from", `"./${name}":`).replace(";", ",")
  );
});
