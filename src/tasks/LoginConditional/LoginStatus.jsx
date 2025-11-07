function LoginStatus({ user }) {
  return <h3>{user.isLoggedIn ? "Welcome back!" : "Please login"}</h3>;
}

export default LoginStatus;
