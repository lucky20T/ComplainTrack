# Complaint Management Portal (ComplainTrack)

A centralized, automated web-based portal designed to modernize how organizations, government departments, and service providers manage customer complaints. By replacing slow, manual tracking with an automated system, ComplainTrack improves transparency, accountability, and complaint resolution time.

## 🚀 Key Features

*   **Role-Based Dashboards**: Tailored experiences for Citizens, Department Officers, and Administrators.
*   **Real-Time Tracking**: Citizens receive a unique Tracking ID to monitor the progress of their complaints.
*   **Smart Auto-Routing** *(Upcoming)*: Automatically assigns complaints to relevant departments based on category and sentiment.
*   **SLA Monitoring & Escalation** *(Upcoming)*: Ensures complaints are resolved on time, automatically escalating if Service Level Agreements are breached.
*   **Analytics & Reporting** *(Upcoming)*: Admin dashboards featuring rich charts to monitor performance and identify recurring issues.
*   **Payment Gateway** *(Upcoming)*: Stripe integration for online fine collection and automated refunds.
*   **Geo-Tagging & Sentiment Analysis** *(Upcoming)*: Attach location data and analyze complaint urgency using NLP.

## 🛠️ Tech Stack

*   **Frontend & Backend Framework**: [Next.js (App Router)](https://nextjs.org/)
*   **Styling**: Premium Vanilla CSS (Glassmorphism & Modern UI)
*   **Database**: [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
*   **Authentication**: [NextAuth.js (Auth.js)](https://next-auth.js.org/) with bcrypt password hashing
*   **Icons**: [Lucide React](https://lucide.dev/)

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
*   [MongoDB](https://www.mongodb.com/try/download/community) (Running locally or an Atlas connection string)
*   Git

## 💻 Setup & Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/lucky20T/ComplainTrack.git
   cd ComplainTrack
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root of the project and add your MongoDB URI and NextAuth Secret:
   ```env
   MONGODB_URI=mongodb://localhost:27017/complain-track
   NEXTAUTH_SECRET=your_super_secret_key_here
   NEXTAUTH_URL=http://localhost:3000
   ```
   *(Note: You can generate a random secret string using `openssl rand -base64 32` for `NEXTAUTH_SECRET`)*

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open the Application**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## 📂 Project Structure

```text
├── app/
│   ├── api/            # Next.js API Routes (Backend)
│   ├── dashboard/      # Role-specific dashboards (Citizen, Officer, Admin)
│   ├── login/          # Authentication pages
│   ├── register/
│   ├── globals.css     # Global Design System & Styles
│   ├── layout.tsx      # Root application layout
│   └── page.tsx        # Landing Page
├── components/         # Reusable UI components (Navbar, etc.)
├── lib/                # Utility functions and configurations (db.ts, auth.ts)
├── models/             # Mongoose Database Schemas
└── public/             # Static assets (images, icons)
```

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
