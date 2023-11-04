import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
function LoginReg() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const currLocation = useLocation();
  // console.log(currLocation)
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      if (localStorage.getItem("token").length > 10) {
        fetch("https://globalvistarbackend-production.up.railway.app/user/me", {
          method: "GET",
          headers: {
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        }).then((res) => {
          res.json().then((data) => {
            if (data.user) {
              setUser(data.user.name);
              console.log(data.user.name + " signed in");
            }
          });
        });
      }
    }
  }, []);
  if (user) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
    alignItems: "center",
          }}
        >
            <div
              className="btn2 name-btn"
              style={{
                marginRight: 5,
              }}
            >
              Hello, {user}
            </div>

            <button
              className="btn2 login-btn"
              onClick={() => {
                localStorage.setItem("token", null);
                setUser(null);
                navigate("/");
              }}
            >
              Log out
            </button>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <Link to="/login" className="btn2 login-btn">
          Login
        </Link>
        <Link to="/register" className="btn2 register-btn">
          Sign Up
        </Link>{" "}
      </div>
    );
}

export default LoginReg;
