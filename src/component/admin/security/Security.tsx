import { env } from "process";
import { useState } from "react";
import { toast } from "react-toastify";

export const Security = () => {
  const [login, setLogin] = useState(``);
  const [password, setPassword] = useState(``);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login === `admin` && password === `admin`) {
      sessionStorage.setItem("isAuthenticated", `true`);
      window.location.href = `${process.env.PUBLIC_URL}/admin`;
    } else {
      toast.warning("Error");
    }
  };

  return (
    <section className="login_container">
      <form onSubmit={handleLogin}>
        <div className="login_box">
          <input
            type="text"
            value={login}
            name={login}
            placeholder="Login"
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <input
            type="text"
            value={password}
            name={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Push On</button>
        </div>
      </form>
    </section>
  );
};
