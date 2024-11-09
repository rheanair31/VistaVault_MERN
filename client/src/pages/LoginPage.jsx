import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext.jsx";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert('Email and password cannot be empty.');
      return;
    }

    try {
      const { data } = await axios.post('http://localhost:4000/login', { email, password });
      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      // Provide a detailed error message from the response if available
      const message = e.response?.data?.message || 'Login failed. Please check your credentials.';
      alert(message);  // Show the error message as an alert
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="form-container mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input 
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={ev => setEmail(ev.target.value)} 
            aria-label="Email" // Accessibility label
            className="w-full mb-4 p-2" // Styling for input
          />
          <input 
            type="password"
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)} 
            aria-label="Password" // Accessibility label
            className="w-full mb-4 p-2" // Styling for input
          />
          <button className="primary w-full">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
