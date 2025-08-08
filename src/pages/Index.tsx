import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

// Tailwind CSS (with Gruvbox variables)
import '../styles/tailwind.css';

function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = stored ? stored === 'dark' : prefersDark;
    setIsDark(initialDark);
    document.documentElement.setAttribute('data-theme', initialDark ? 'dark' : 'light');
  }, []);

  const toggle = (): void => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button className="btn" onClick={toggle} aria-label="Toggle theme">
      {isDark ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-base text-text">
      <div className="container mx-auto px-4 py-8 space-y-6">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Effective Altruism San Francisco</h1>
          <ThemeToggle />
        </header>
        <main className="space-y-4">
          <div className="card p-6">
            <p>Welcome. This page now uses Tailwind with a Gruvbox theme.</p>
          </div>
        </main>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
