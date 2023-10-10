import { Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
function LoginReg() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const currLocation = useLocation();
  // console.log(currLocation)
  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      if (localStorage.getItem("token").length > 10) {
        fetch("https://gv-backend-production.up.railway.app/user/me", {
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
          }}
        >
          <div>
            <Button
              className="StandardButton"
              variant="text"
              style={{
                margin: 5,
              }}
            >
              Hello, {user}
            </Button>
            <Button
              className="StandardButton"
              variant="contained"
              onClick={() => {
                localStorage.setItem("token", null);
                setUser(null);
                navigate("/");
              }}
              style={{
                margin: 5,
              }}
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button
            className="StandardButton"
            variant="contained"
            style={{
              margin: 5,
            }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Sign up
          </Button>
          <Button
            className="StandardButton"
            variant="contained"
            onClick={() => {
              navigate("/login");
            }}
            style={{
              margin: 5,
            }}
          >
            Sign in
          </Button>
        </div>
      </div>
    );
}

export default LoginReg;
