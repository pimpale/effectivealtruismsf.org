import React from 'react';
import { createRoot } from 'react-dom/client';

// Tailwind CSS (with Gruvbox variables)
import '../styles/tailwind.css';
import Layout from '../components/Layout';

function App() {
  return (
    <Layout>
      <div className="space-y-4">
        <div className="card p-6">
          <p>Welcome. This page now uses Tailwind with a Gruvbox theme.</p>
        </div>
      </div>
    </Layout>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
