import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/tailwind.css';
import Layout from '../components/Layout';

function GetInvolvedPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Get Involved</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 border border-base-200 p-6 space-y-3">
            <h2 className="text-xl font-semibold">Welcome Form</h2>
            <p className="text-base-content/70">Best way to connect with the group. We'll follow up to help you get started.</p>
            <div className="skeleton h-10 w-40" />
          </div>
          <div className="card bg-base-100 border border-base-200 p-6 space-y-3">
            <h2 className="text-xl font-semibold">Newsletter</h2>
            <p className="text-base-content/70">Monthly updates, events, job postings, opportunities, and more.</p>
            <div className="skeleton h-10 w-40" />
          </div>
          <div className="card bg-base-100 border border-base-200 p-6 space-y-3">
            <h2 className="text-xl font-semibold">1-on-1 Support</h2>
            <p className="text-base-content/70">Schedule a call to discuss your goals, no matter your experience level.</p>
            <div className="skeleton h-10 w-40" />
          </div>
          <div className="card bg-base-100 border border-base-200 p-6 space-y-3">
            <h2 className="text-xl font-semibold">Volunteer</h2>
            <p className="text-base-content/70">Help us run events and welcome new members.</p>
            <div className="skeleton h-10 w-40" />
          </div>
        </div>
      </div>
    </Layout>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <GetInvolvedPage />
  </React.StrictMode>,
);


