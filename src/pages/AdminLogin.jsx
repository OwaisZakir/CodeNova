import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple dummy check (replace with real auth later)
    if (email === "admin@codenove.com" && password === "123456") {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials ⚠️");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
          CodeNove Admin
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <div className="flex items-center border border-gray-700 rounded-lg px-3">
              <Mail size={20} className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="admin@codenove.com"
                className="w-full p-3 bg-transparent outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm">Password</label>
            <div className="flex items-center border border-gray-700 rounded-lg px-3">
              <Lock size={20} className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-3 bg-transparent outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition p-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
