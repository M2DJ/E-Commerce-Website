import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError("Failed to log in: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setError("");
      setLoading(true);
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setError("Failed to sign in with Google: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (windowWidth <= 320 || windowWidth <=375) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="mb-10">
          <p className="text-3xl font-bold text-blue-500">Login</p>
        </div>
        {error && <div>{error}</div>}
        <div>
          <form onSubmit={handleSubmit}>
            <label className="text-blue-500 font-semibold">Email</label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-78 h-12 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"
            />
            <br />
            <label className="text-blue-500 font-semibold">Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-78 h-12 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"
            />
            <br />
            <div className="flex justify-center mt-17">
              <button
                disabled={loading}
                className="w-60 h-11 rounded-lg bg-blue-500 text-lg text-center text-white"
              >
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
  } else if (windowWidth <= 768) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="mb-10">
          <p className="text-4xl font-bold text-blue-500">Login</p>
        </div>
        {error && <div>{error}</div>}
        <div>
          <form onSubmit={handleSubmit}>
            <label className="text-blue-500 font-semibold">Email</label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-100 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"
            />
            <br />
            <label className="text-blue-500 font-semibold">Password</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-100 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"
            />
            <br />
            <div className="flex justify-center mt-17">
              <button
                disabled={loading}
                className="w-80 h-11 rounded-lg bg-blue-500 text-xl text-center text-white"
              >
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
  } else if (windowWidth >= 1024 && windowWidth <= 1440) {
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-150 h-13 border border-white bg-blue-400 text-white rounded-lg p-2 ml-1 mb-5"
            />
            <br />
            <div className="flex justify-center mt-17">
              <button
                disabled={loading}
                className="w-80 h-11 rounded-lg bg-blue-500 text-center text-white"
              >
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
  } else {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="mb-10">
          <p className="text-8xl font-bold text-blue-500">Login</p>
        </div>
        {error && <div className="text-8xl">{error}</div>}
        <div className="text-4xl">
          <form onSubmit={handleSubmit}>
            <label className="text-blue-500 text-5xl font-semibold">
              Email
            </label>
            <br />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-350 h-20 border border-white bg-blue-400 text-white rounded-lg p-2 ml-2 mb-5"
            />
            <br />
            <label className="text-blue-500 text-5xl font-semibold">
              Password
            </label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-350 h-20 border border-white bg-blue-400 text-white rounded-lg p-2 ml-2 mb-10"
            />
            <br />
            <div className="flex justify-center mt-17">
              <button
                disabled={loading}
                className="w-100 h-20 rounded-lg bg-blue-500 text-4xl text-center text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="flex mt-8">
          <p className="mr-1 text-3xl">Don't have an account?</p>
          <Link to="/signup" className="text-blue-500 text-3xl">
            SignUp
          </Link>
        </div>
      </div>
    );
  }
};

export default Login;
