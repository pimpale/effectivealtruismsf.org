import React from 'react';
import { createRoot } from 'react-dom/client';

// Tailwind CSS (with Gruvbox variables)
import '../styles/tailwind.css';
import Layout from '../components/Layout';
import life_paths from '../assets/life_paths.jpg';
import community from '../assets/community.jpg';
import ea_sf from '../assets/ea_sf.jpg';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

function App() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Hero with placeholders */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[75vh]">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              San Francisco Effective Altruism
            </h1>
            <p className="text-lg text-base-content/70 max-w-prose">
              Building San Francisco's community of people committed to using evidence and reason to do the most good.
            </p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/get-involved.html">Get Involved</a>
              <a className="btn" href="/events.html">See Events</a>
            </div>
          </div>
          <div className="w-full">
            <img src={ea_sf} alt="EA San Francisco" className="w-full h-full object-cover rounded-xl" />
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
          <a className="card bg-base-100 border border-base-200 hover:border-base-300 transition p-6" href="/about.html">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">About EA & Our Chapter</h3>
              <p className="text-base-content/70">Learn more about effective altruism and our chapter.</p>
            </div>
          </a>
          <a className="card bg-base-100 border border-base-200 hover:border-base-300 transition p-6" href="/get-involved.html">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">1-on-1 Support</h3>
              <p className="text-base-content/70">Book a chat with an organizer to discuss your path to impact.</p>
            </div>
          </a>
        </section>

        {/* Info: Paths to impact (row 1, 50/50) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose max-w-none">
            <h2>Paths to making an impact</h2>
            <p>
              Depending on your background and interests, there are many ways to contribute: global health, biosecurity, animal welfare,
              economic growth, and AI safety.
            </p>
            <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">

              <a className="btn btn-outline" href="https://www.effectivealtruism.org/articles/introduction-to-effective-altruism">
                Introduction to Effective Altruism
                <span className="sr-only"> (opens in new tab)</span>
                <BoxArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="btn btn-outline"
                href="https://forum.effectivealtruism.org/handbook"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the EA Handbook
                <span className="sr-only"> (opens in new tab)</span>
                <BoxArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="not-prose">
            <div className=" w-full min-h-64 rounded-xl" >
              <img src={life_paths} alt="Life paths" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </section>

        {/* Info: Connect with the community (row 2, 50/50, image left) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="not-prose order-2 md:order-1">
            <div className=" w-full min-h-64 rounded-xl" >
              <img src={community} alt="Community" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
          <div className="prose max-w-none order-1 md:order-2">
            <h2>Connect with the community</h2>
            <p>
              Join events, find peers with similar interests, and get matched for a 1-on-1 to discuss your goals.
              Subscribe to our newsletter to keep up with opportunities and updates.
            </p>
            <div className="not-prose grid sm:grid-cols-2 gap-3 mt-4">
              <a className="btn btn-outline" href="/events.html">Events Calendar</a>
              <a className="btn btn-outline" href="/get-involved.html">Newsletter & Slack</a>
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
