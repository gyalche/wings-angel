import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './store/store.ts';

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
);
