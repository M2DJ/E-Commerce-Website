import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        setError('');
        setLoading(true);
        await login(email, password);
        navigate('/');
    } catch(err) {
        setError('Failed to log in: ' + err.message);
    } finally {
        setLoading(false);
    }
  }

  const handleGoogleSignIn = async() => {
    try{
        setError('');
        setLoading(true);
        await googleSignIn();
        navigate('/');
    } catch(err) {
        setError('Failed to sign in with Google: ' + err.message);
    } finally {
        setLoading(false);
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="mb-10">
        <p className="text-4xl font-bold text-blue-500">Login</p>
      </div>
      {error && <div>{error}</div>}
      <div className="text-2xl">
        <form onSubmit={handleSubmit}>
          <label className="text-blue-500 font-semibold">Email</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-150 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"
          />
          <br />
          <label className="text-blue-500 font-semibold">Password</label>
          <br />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-150 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"
          />
          <br />
          <div className="flex justify-center mt-17">
            <button disabled={loading} className="w-80 h-11 rounded-lg bg-blue-500 text-center text-white">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="flex mt-4">
        <p className="mr-1">Don't have an account?</p>
        <Link to="/signup" className="text-blue-500 underline">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Login;
