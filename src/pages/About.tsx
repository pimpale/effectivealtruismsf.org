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
            Effective Altruism (EA) is a framework and community focused on using evidence and reason to figure out how to help others the most.
            We mainly focus on AI Safety, as we're based in San Francisco, where many AI companies are located.
            However, we are also interested in supporting other cause areas, such as global health, animal welfare, and movement building.
          </p>
          <p>
            We welcome visitors and regulars alike. Whether you want to explore cause areas, plan your career, or give more effectively, we can help
            you find the next step.
          </p>
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


