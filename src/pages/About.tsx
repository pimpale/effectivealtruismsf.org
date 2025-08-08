import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/tailwind.css';
import Layout from '../components/Layout';

function AboutPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">About</h1>
        <div className="prose max-w-none">
          <p>
            Effective Altruism (EA) is a framework and community focused on using evidence and reason to figure out how to help others the most —
            and taking action on those insights. Our chapter supports people through mentorship, events, and curated resources.
          </p>
          <p>
            We welcome visitors and regulars alike. Whether you want to explore cause areas, plan your career, or give more effectively, we can help
            you find the next step.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-100 border border-base-200 p-6">
            <h3 className="font-semibold">Community Health</h3>
            <p className="text-base-content/70">We aim to foster a welcoming, safe, and supportive environment.</p>
          </div>
          <div className="card bg-base-100 border border-base-200 p-6">
            <h3 className="font-semibold">Our Team</h3>
            <p className="text-base-content/70">Local organizers and volunteers committed to impactful community-building.</p>
          </div>
          <div className="card bg-base-100 border border-base-200 p-6">
            <h3 className="font-semibold">Code of Conduct</h3>
            <p className="text-base-content/70">Guidelines for participation to ensure positive experiences for everyone.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <AboutPage />
  </React.StrictMode>,
);


