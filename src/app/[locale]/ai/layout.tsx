import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Interface | Command Chess",
  description: "Machine-readable interface for AI agents and logic crawlers.",
  robots: "index, follow",
};

export default function AILayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ai-container" style={{ 
      backgroundColor: "#000000", 
      color: "#00FF00", 
      fontFamily: "monospace",
      padding: "2rem",
      minHeight: "100vh"
    }}>
      <header style={{ borderBottom: "1px solid #00AA00", paddingBottom: "1rem", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "1.5rem", margin: 0 }}>Terminal: Command Chess AI Access Node</h1>
        <p style={{ margin: "0.5rem 0 0 0", opacity: 0.8 }}>Format: Semantic HTML / Markdown. Purpose: Agent Consumption.</p>
      </header>
      {children}
    </div>
  );
}
