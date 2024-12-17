import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav style={styles.navbar}>
      <div style={styles.navLinks}>
        <Link to="/products" style={styles.link}>
          Products
        </Link>
        <Link to="/cart" style={styles.link}>
          Cart
        </Link>
        {user && (
          <Link to="/profile" style={styles.link}>
            Profile
          </Link>
        )}
      </div>

      <div style={styles.authLinks}>
        {!user ? (
          <>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
            <Link to="/register" style={styles.link}>
              Register
            </Link>
          </>
        ) : (
          <>
            <span style={styles.userInfo}>
              Welcome, {user.name || user.email}
            </span>
            <button onClick={logout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  navLinks: {
    display: "flex",
  },
  authLinks: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    marginLeft: "10px",
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#444",
    fontSize: "16px",
  },
  userInfo: {
    marginRight: "10px",
    fontSize: "16px",
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Navbar;
