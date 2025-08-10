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
          {/* Slack */}
          <div className="card bg-base-100 border border-base-200 p-6 space-y-3">
            <h2 className="text-xl font-semibold">Join our Slack</h2>
            <p className="text-base-content/70">Connect with members, get updates, and coordinate in our workspace.</p>
            <a
              className="btn w-fit"
              href="https://bayareaea.slack.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Slack
            </a>
          </div>
          {/* Give a talk */}
          <div className="card bg-base-100 border border-base-200 p-6 space-y-3">
            <h2 className="text-xl font-semibold">Sign up to give a talk</h2>
            <p className="text-base-content/70">Propose a lightning talk, longer presentation, or workshop for the community.</p>
            <a
              className="btn w-fit"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeqHFwgODtMTHXvMCaZTConyLQ94c_s5VFqU-eV_fIHBbxyYQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit a talk idea
            </a>
          </div>

          {/* 1-on-1s */}
          <div className="card bg-base-100 border border-base-200 p-6 space-y-3">
            <h2 className="text-xl font-semibold">1-on-1 with an organizer</h2>
            <p className="text-base-content/70">Let us know if you'd be interested in chatting 1-on-1! It could be for career guidance, donation planning, or anything that you're interested in or confused about in effective altruism.</p>
            <a
              className="btn w-fit"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2E11F97QwjniQjbrLrI0juZnMXUYo9yrP0QtImKdc4mrY7w/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a 1-on-1
            </a>
          </div>

          {/* Newsletter */}
          <div className="card bg-base-100 border border-base-200 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Newsletter</h2>
              <span className="badge badge-neutral">Coming soon</span>
            </div>
            <p className="text-base-content/70">Get monthly updates on events, opportunities, and local news.</p>
            <button className="btn btn-disabled w-fit" disabled>
              Coming soon
            </button>
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


