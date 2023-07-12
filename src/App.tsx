import { HikariProviders, globalStyles } from "hikari-ui";
import classNames from "classnames";
import { Header } from "./components/common/Header";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./services/apolloClient";
import "./styles/globals.css";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./Router";

function App() {
  globalStyles();
  return (
    <ApolloProvider client={apolloClient}>
      <HikariProviders>
        <div
          className={classNames("flex flex-col items-center", "min-h-screen")}
        >
          <Header />
          <div
            className={classNames(
              "flex flex-col items-center flex-1",
              "w-full h-full px-4 mb-8"
            )}
          >
            <RouterProvider router={router} />
          </div>
        </div>
      </HikariProviders>
    </ApolloProvider>
  );
}

export default App;
