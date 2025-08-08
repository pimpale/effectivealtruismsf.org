import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/tailwind.css';
import Layout from '../components/Layout';

function EventsPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Events</h1>
          <a className="btn" href="/get-involved.html">Subscribe to Newsletter</a>
        </div>
        <div className="card bg-base-100 border border-base-200 p-6">
          <p className="text-base-content/70">Upcoming events will appear here. Add your calendar embed or events widget.</p>
          <div className="skeleton h-56 w-full mt-4" />
        </div>
      </div>
    </Layout>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <EventsPage />
  </React.StrictMode>,
);


