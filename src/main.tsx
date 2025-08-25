import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { Toaster } from './components/ui/sonner.tsx'
import './index.css'
import { ThemeProvider } from './provider/ThemeProvider.tsx'
import { store } from './redux/store.ts'
import RouterWrapper from './routes/index.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <BrowserRouter>
          <RouterWrapper />
        </BrowserRouter>
        <Toaster position="top-center" richColors />
      </ThemeProvider>
    </ReduxProvider>
  </StrictMode>
);
