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
        <div className="card bg-base-100 border border-base-200 p-4 md:p-6">
          <p className="text-base-content/70 mb-4">Browse upcoming events on our Google Calendar.</p>
          <div className="w-full aspect-[4/3]">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=b8d7148f209831f6557ba929e4ab1c164ea0e3372faeff5c10cd6991f74fbfae%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              style={{ border: 0 }}
              className="w-full h-full rounded-lg"
              loading="lazy"
              title="EA San Francisco Events Calendar"
            />
          </div>
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


