import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import Well from "../../../Components/Well";
import { useActions } from "../../../Overmind";

const AdminLogin: React.FC = () => {
  const { loginAdmin } = useActions().admin;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username) return;
    if (!password) return;
    loginAdmin({username, password});
  };
  return (
    <Well variant="light">
      <Grid container direction="column">
        <h3>Login</h3>
        <TextField
          label="Username"
          // style={{ backgroundColor: "white" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          // style={{ backgroundColor: "white" }}
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin} variant="contained">
          Login
        </Button>
      </Grid>
    </Well>
  );
};

export default AdminLogin;
