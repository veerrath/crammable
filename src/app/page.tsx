"use client";

import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>crammable</div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink} onClick={() => alert("Overview coming soon")}>
            Overview
          </a>
          <a href="#" style={styles.navLink} onClick={() => router.push("/signup")}>
            Sign Up
          </a>
        </nav>
      </header>

      <main style={styles.main}>
        <div style={styles.leftSection}>
          <h1 style={styles.title}>
            The first AI<br />
          </h1>
          <h1 style={styles.title1}>
            study scheduling app
          </h1>
          <p style={styles.subtitle}>
            Be so prepared for a test you get <span style={{ fontStyle: "italic" }}>excited</span> thinking about it.
          </p>
          <button style = {styles.button} onClick={() => router.push("/signup")}>
            Get Started
          </button>

        </div>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    height: "100vh",
    backgroundColor: "#fff9f3ff",
    color: "#111",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    height: 60,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    borderBottom: "",
  },
  logo: {
    fontWeight: "800",
    paddingLeft: 110,
    paddingTop: 40,
    fontSize: 31,
    textTransform: "lowercase",
    cursor: "default",
    color: "#6c4735ff",
    letterSpacing: "0.05em",
    fontFamily:"cursive"
  },
  nav: {
    display: "flex",
    gap: 24,
    paddingRight: 200,
    paddingTop:40,

    
  },
  navLink: {
    color: "#292828ff",
    fontFamily:"Verdana",
    fontWeight: "100",
    fontSize: 18,
    textDecoration: "none",
    cursor: "pointer",
    transition: "color 0.25s ease",
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    paddingLeft: "8vw",
  },
  leftSection: {
    maxWidth: 600,
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#000000ff",
    lineHeight: 1.1,
    margin: 0,
    paddingLeft:80,
  },
  title1: {
    fontSize: 45,
    paddingLeft:80,
    fontWeight: "800",
    lineHeight: 1.1,
    margin: 0,
  },
  subtitle: {
    marginTop: 20,
    fontSize: 19,
    paddingLeft:80,
    paddingTop:10,
    color: "#000000",
    fontWeight: "400",
  },
  button: {
    backgroundColor: '#793b0fff',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.1), 0px 12px 30px rgba(0,0,0,0.3)', // big bottom shadow
    marginLeft: 80,
    marginTop: 20,
  }
};
