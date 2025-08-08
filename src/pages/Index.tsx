import React from 'react';
import { createRoot } from 'react-dom/client';

// Tailwind CSS (with Gruvbox variables)
import '../styles/tailwind.css';
import Layout from '../components/Layout';

function App() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero with placeholders */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[75vh]">
          <div className="space-y-6">
            <span className="badge badge-neutral">Effective Altruism San Francisco</span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              A resource hub and community — combining compassion and reason to do the most good.
            </h1>
            <p className="text-lg text-base-content/70 max-w-prose">
              Inspired by established chapters, we support people in making impactful, informed decisions via mentorship, events, and curated resources.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/get-involved.html">Get Involved</a>
              <a className="btn" href="/events.html">See Events</a>
            </div>
          </div>
          <div className="w-full">
            <div className="mockup-window border bg-base-200">
              <div className="min-h-[380px] bg-base-100 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="skeleton h-8 w-56 mx-auto" />
                  <div className="skeleton h-4 w-72 mx-auto" />
                  <div className="skeleton h-4 w-64 mx-auto" />
                  <div className="mt-4 skeleton h-10 w-40 mx-auto" />
                  <p className="mt-4 text-sm text-base-content/60">Interactive widget placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA tiles */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a className="card bg-base-100 border border-base-200 hover:border-base-300 transition p-6" href="/events.html">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Upcoming Events</h3>
              <p className="text-base-content/70">Learn, connect, and collaborate at weekly public events.</p>
            </div>
          </a>
          <a className="card bg-base-100 border border-base-200 hover:border-base-300 transition p-6" href="/resources.html">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Career & Giving Resources</h3>
              <p className="text-base-content/70">Explore curated guides on careers, cause areas, and effective giving.</p>
            </div>
          </a>
          <a className="card bg-base-100 border border-base-200 hover:border-base-300 transition p-6" href="/get-involved.html">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">1-on-1 Support</h3>
              <p className="text-base-content/70">Book a chat with an organizer to discuss your path to impact.</p>
            </div>
          </a>
        </section>

        {/* Info sections inspired by EA NYC & EA DC */}
        <section className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="prose max-w-none">
            <h2>Paths to making an impact</h2>
            <p>
              Depending on your background and interests, there are many ways to contribute: global health, biosecurity, animal welfare,
              economic growth, AI safety, climate change, mental health, and movement building.
            </p>
            <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
              <a className="btn btn-outline" href="/resources.html">See the EA Handbook</a>
              <a className="btn btn-outline" href="/about.html">About EA & Our Chapter</a>
            </div>
          </div>
          <div className="prose max-w-none">
            <h2>Connect with the community</h2>
            <p>
              Join events, find peers with similar interests, and get matched for a 1-on-1 to discuss your goals.
              Subscribe to our newsletter to keep up with opportunities and updates.
            </p>
            <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
              <a className="btn" href="/events.html">Events Calendar</a>
              <a className="btn" href="/get-involved.html">Newsletter & Slack</a>
            </div>
          </div>
        </section>

        
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
