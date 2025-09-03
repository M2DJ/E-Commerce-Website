import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, updateUserProfile } = useAuth;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Password Doesn't Match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigate("/");
    } catch (err) {
      setError("Failed to create an account: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center p-3">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-blue-500">Sign-up</h1>
      </div>
      {error && <div className="error">{error}</div>}
      <div>
        <form onSubmit={handleSubmit}>
          <label className="text-blue-500 text-2xl font-semibold">Email</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-150 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"
          />
          <br />
          <label className="text-blue-500 text-2xl font-semibold">
            Password
          </label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-150 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"
          />
          <br />
          <label className="text-blue-500 text-2xl font-semibold">
            Confirm Password
          </label>
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-150 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"
          />
          <br />
          <div className="flex justify-center mt-17">
            <button disabled={loading} type="submit" className="w-80 h-11 rounded-lg bg-blue-500 text-center text-white">
              Sign-up
            </button>
          </div>
        </form>
      </div>
      <div className="flex mt-4">
        <p className="mr-1">Already have an account?</p>
        <Link to="/profile" className="text-blue-500 underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
