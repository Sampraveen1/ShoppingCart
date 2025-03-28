import { useState } from "react";
import { TextField, Button, Typography, Paper,  Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        navigate('/layout/mainpage');
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (

        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                height:'100vh'
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    width: "250px",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)"
                }}
            >
                <Typography variant="h5" fontWeight="bold" mb={2}>
                    Login
                </Typography>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </Paper>
        </Box>




    );
};

export default Login;