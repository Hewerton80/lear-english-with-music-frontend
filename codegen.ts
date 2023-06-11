import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3001',
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
  documents: './src/graphql/**/*.{graphql,js,jsx,ts,tsx}',
  generates: {
    './src/graphql/generated-types/index.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHOC: true,
        withComponent: true,
        withRefetchFn: true,
      },
    },
  },
};

export default config;