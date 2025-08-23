import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import { router } from './routes/index.ts'
import { ThemeProvider } from './provider/ThemeProvider.tsx'
import { Toaster } from './components/ui/sonner.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store.ts'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>
);
