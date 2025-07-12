import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/modern-normalize.css";
import "./styles/style.css";
import "./styles/utils.css";
import { CMS } from "./constants/CONSTANTS.js";

const client = new ApolloClient({
  uri: CMS,
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <StrictMode>
      <App />
    </StrictMode>
  </ApolloProvider>
);
