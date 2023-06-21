import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_PUBLIC_API,
  cache: new InMemoryCache(),
});
