import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://sa-east-1.cdn.hygraph.com/content/cljfss97a05lv01uo4ajnhgl9/master',
  // hooks: {
  //   afterOneFileWrite: ['prettier --write'],
  // },
  documents: "./src/graphql/**/*.{graphql,js,jsx,ts,tsx}",
  generates: {
    "./src/graphql/generated-types/index.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHOC: true,
        withComponent: true,
        withRefetchFn: true,
      },
    },
  },
};

export default config;
