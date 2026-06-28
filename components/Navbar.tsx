'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="nav-logo">
          Complaint<span className="text-primary">Track</span>
        </Link>
        <div className="nav-links">
          {session ? (
            <>
              <span className="user-greeting">Hi, {session.user?.name}</span>
              <button onClick={() => signOut()} className="btn btn-outline btn-sm">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="btn btn-outline btn-sm">Login</Link>
              <Link href="/register" className="btn btn-primary btn-sm">Sign Up</Link>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .navbar {
          background: var(--background-white);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
        }
        .text-primary {
          color: var(--primary-color);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
        }
        .user-greeting {
          font-weight: 600;
          color: var(--text-muted);
        }
      `}</style>
    </nav>
  );
}
