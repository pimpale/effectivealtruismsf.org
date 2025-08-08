import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/tailwind.css';
import Layout from '../components/Layout';

function ResourcesPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Resources</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 border border-base-200 p-6 space-y-2">
            <h2 className="text-xl font-semibold">Career Resources</h2>
            <p className="text-base-content/70">Explore curated guides on impactful careers and local opportunities.</p>
            <div className="skeleton h-40 w-full" />
          </div>
          <div className="card bg-base-100 border border-base-200 p-6 space-y-2">
            <h2 className="text-xl font-semibold">Donation Resources</h2>
            <p className="text-base-content/70">Learn about effective giving and charity evaluations.</p>
            <div className="skeleton h-40 w-full" />
          </div>
          <div className="card bg-base-100 border border-base-200 p-6 space-y-2">
            <h2 className="text-xl font-semibold">Cause Areas</h2>
            <p className="text-base-content/70">Intro materials on global health, biosecurity, animal welfare, AI safety, and more.</p>
            <div className="skeleton h-40 w-full" />
          </div>
          <div className="card bg-base-100 border border-base-200 p-6 space-y-2">
            <h2 className="text-xl font-semibold">General EA Resources</h2>
            <p className="text-base-content/70">EA handbooks, articles, videos, and discussion materials.</p>
            <div className="skeleton h-40 w-full" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ResourcesPage />
  </React.StrictMode>,
);


