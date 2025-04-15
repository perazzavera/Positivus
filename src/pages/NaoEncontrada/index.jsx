import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage:
          "linear-gradient(to bottom, rgba(248, 249, 250, 0.9), rgba(248, 249, 250, 0.95))",
      }}
    >
      {/* Header */}
      <header className="py-4 border-bottom bg-white">
        <div className="container">
          <Link to="/" className="text-decoration-none">
            <img
              style={{ filter: "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.1))" }}
              src="/images/positivus-verde.svg"
            />
          </Link>
        </div>
      </header>

      {/* Main Content - Container com sombra externa */}
      <main className="flex-grow-1 d-flex align-items-center">
        <div
          className="container text-center py-5 px-4 my-5 rounded-3"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            maxWidth: "800px",
            border: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          <div className="mx-auto">
            <h1
              className="display-1 fw-bold mb-4"
              style={{
                color: "var(--verde)",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                letterSpacing: "2px",
              }}
            >
              404
            </h1>
            <h2
              className="h1 fw-bold mb-4"
              style={{
                color: "var(--verde)",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Page Not Found
            </h2>
            <p className="fs-5 text-secondary mb-5">
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <Link
              to="/"
              className="btn btn-lg px-4 py-3 fw-semibold border-0"
              style={{
                backgroundColor: "var(--verde)",
                color: "white",
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>

      {/* Footer em inglês */}
      <footer className="py-4 border-top text-center bg-white">
        <div className="container">
          <p className="mb-0 text-muted">
            © {new Date().getFullYear()} Positivus. All rights reserved.
          </p>
          <p className="small mt-2 text-muted">
            Helping you build positive digital experiences
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Error404;
