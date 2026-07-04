declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.css" {}

declare module "@fontsource/roboto/300.css";
declare module "@fontsource/roboto/400.css";
declare module "@fontsource/roboto/500.css";
declare module "@fontsource/roboto/700.css";
declare module "@fontsource/material-icons";

declare module "*.css?url" {
  export default string;
}

/** Vite ?url imports with path segments (e.g. ../src/app/styles.css?url). */
declare module "*?url" {
  export default string;
}
