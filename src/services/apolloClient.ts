import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log("import.meta.env.PUBLIC_API", import.meta.env);
export const apolloClient = new ApolloClient({
  // uri: import.meta.env.PUBLIC_API,
  uri: 'http://localhost:3001/',
  cache: new InMemoryCache(),
});
