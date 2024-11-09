import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });
      // Success message displayed as an alert
      alert('Registration successful. Now you can log in');
      window.location.href = '/login'; // Redirect to login page
    } catch (e) {
      if (e.response && e.response.status === 409) {
        // Specific error handling for "User already registered"
        alert('User already registered. Please use a different email.');
      } else {
        // Generic error message
        alert('Registration failed. Please try again later.');
      }
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mb-64 max-w-md w-full">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="mx-auto" onSubmit={registerUser}>
          <input 
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={ev => setName(ev.target.value)} 
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input 
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={ev => setEmail(ev.target.value)} 
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input 
            type="password"
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)} 
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button className="primary w-full p-2 rounded">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
