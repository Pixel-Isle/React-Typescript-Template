import appStore from "./store";

export type AppState = ReturnType<typeof appStore.store.getState>;
export type AppDispatch = typeof appStore.store.dispatch;
