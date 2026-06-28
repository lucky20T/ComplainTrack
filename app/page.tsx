'use client';

import { ArrowRight, ShieldCheck, Clock, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">Next Generation Portal</div>
          <h1 className="hero-title">
            Transparent & Efficient <br />
            <span className="text-gradient">Complaint Management</span>
          </h1>
          <p className="hero-description">
            Experience a seamless way to register, track, and resolve your complaints with real-time updates and smart routing technology.
          </p>
          <div className="hero-actions">
            <Link href="/register" className="btn btn-primary btn-lg">
              Register Complaint <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link href="/track" className="btn btn-outline btn-lg">
              Track Status
            </Link>
          </div>
        </div>
        
        {/* Abstract Glassmorphism Illustration */}
        <div className="hero-visual">
          <div className="glass-card main-card">
            <div className="status-dot green"></div>
            <h3>Complaint Resolved</h3>
            <p className="tracking-id">Tracking ID: #CMP-89912</p>
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
          <div className="glass-card side-card">
            <ShieldCheck size={24} className="icon-blue" />
            <span>Secure & Anonymous</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features container">
        <div className="section-header">
          <h2>Why Use Our Portal?</h2>
          <p>Built with modern technology to ensure accountability and speed.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-wrapper"><Clock /></div>
            <h3>SLA Monitoring</h3>
            <p>Automated escalations ensure your complaints are never ignored and resolved within promised timeframes.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper"><BarChart3 /></div>
            <h3>Real-Time Analytics</h3>
            <p>Comprehensive dashboards for administrators to track department performance and complaint trends.</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper"><ShieldCheck /></div>
            <h3>Smart Routing</h3>
            <p>Our intelligent system automatically assigns your complaint to the relevant department based on category and sentiment.</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .landing-page {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          background: radial-gradient(circle at top right, rgba(79, 70, 229, 0.1), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(16, 185, 129, 0.05), transparent 40%);
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
          z-index: 2;
          animation: fadeUp 0.8s ease-out;
        }

        .badge {
          display: inline-block;
          padding: 0.25rem 1rem;
          background: rgba(79, 70, 229, 0.1);
          color: var(--primary-color);
          border-radius: 99px;
          font-weight: 600;
          font-size: 0.875rem;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(79, 70, 229, 0.2);
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary-color), #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        .ml-2 {
          margin-left: 0.5rem;
        }

        /* Hero Visual (Glassmorphism) */
        .hero-visual {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 500px;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
          animation: float 6s ease-in-out infinite;
        }

        .main-card {
          width: 340px;
          z-index: 2;
        }

        .side-card {
          position: absolute;
          bottom: 10%;
          right: 15%;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 600;
          animation: float 7s ease-in-out infinite reverse;
          z-index: 3;
        }

        .status-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .status-dot.green {
          background-color: var(--secondary-color);
          box-shadow: 0 0 10px var(--secondary-color);
        }

        .tracking-id {
          color: var(--text-muted);
          font-family: monospace;
          margin-bottom: 1.5rem;
        }

        .progress-bar {
          height: 6px;
          background: #E5E7EB;
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-fill {
          width: 100%;
          height: 100%;
          background: var(--secondary-color);
          border-radius: 99px;
        }

        .icon-blue {
          color: var(--primary-color);
        }

        /* Features Section */
        .features {
          padding: 6rem 1.5rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .section-header p {
          color: var(--text-muted);
          font-size: 1.125rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: var(--background-white);
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          border: 1px solid var(--border-color);
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
          border-color: var(--primary-color);
        }

        .icon-wrapper {
          width: 50px;
          height: 50px;
          background: rgba(79, 70, 229, 0.1);
          color: var(--primary-color);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-color-scheme: dark) {
          .glass-card {
            background: rgba(31, 41, 55, 0.7);
            border-color: rgba(75, 85, 99, 0.5);
          }
          .progress-bar { background: #374151; }
        }
        
        @media (max-width: 900px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding-top: 4rem;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-visual {
            margin-top: 3rem;
            transform: scale(0.9);
          }
        }
      `}</style>
    </main>
  );
}
