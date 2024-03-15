import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.tsx";
import SomethingWentWrong, {
  PageLoading,
} from "./components/VisualFeedbacks.tsx";
import "./index.css";
import { routes } from "./routes.ts";
import appStore from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={SomethingWentWrong}
      onReset={() => (location.href = routes.landing)}
    >
      <Provider store={appStore.store}>
        <PersistGate loading={<PageLoading />} persistor={appStore.persist}>
          <App />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
