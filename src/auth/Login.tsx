import { useState } from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DefaultVideo from '../assets/video/login.mp4';
import BackgroundVideoWrapper from "../style/BackgroundVideoWrapper";
// import { loginUser } from "./auth";




const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    // const [message, setMessage] = useState<string>("");   

    

    const handleLogin = () => {
        navigate('/layout/mainpage');
        console.log("Email:", email);
        console.log("Password:", password);
    };

  


    //  const handleLogin = async (email: string, password: string) => {
    //     // navigate('/layout/mainpage');
    //     return new Promise((resolve, reject) => {
    //         if (email === "test@example.com" && password === "password123") {
    //             resolve("Login successful");
    //             navigate('/layout/mainpage'); 
    //         } else {
    //             reject(new Error("Invalid email or password"));
    //         }
    //     });
    // };
    

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{ height: '100vh' }}
        >
            {/* Left Side - Video */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Box sx={{ borderRadius: "20px", overflow: 'hidden', width: "93%", height: '97%' }}>
                    <BackgroundVideoWrapper videoSrc={DefaultVideo}>
                        <></>
                    </BackgroundVideoWrapper>
                </Box>
            </Grid>

            {/* Right Side - Login Box */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        height: 'auto',
                        width: "300px",
                        textAlign: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(10px)",
                        borderRadius:'20px'
                    }}
                >
                    {/* Heading */}
                    <Typography variant="h5" fontWeight="bold" mb={2}>
                        Styles
                        <Typography variant="body2" fontStyle="italic" color="textSecondary">
                            Fashion World
                        </Typography>
                    </Typography>

                    {/* Login Title */}
                    <Typography variant="h4" letterSpacing="3px" fontWeight="bold" color="darkGrey" mb={2}>
                        LOGIN NOW
                    </Typography>

                    {/* Email Input */}
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Password Input */}
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Typography variant="body2" color="primary" textAlign="end" sx={{ cursor: "pointer" }} >
                        Forgot Password?
                    </Typography>

                    {/* Login Button */}
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                     
                     
                    

                    {/* Sign Up Section */}
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        Don't have an account?{" "}
                        <Typography
                            component="span"
                            variant="body2"
                            color="primary"
                            sx={{ cursor: "pointer", fontWeight: "bold" }}
                            // onClick={handleSignUp}
                        >
                            Sign Up
                        </Typography>
                    </Typography>
                </Paper>
            </Grid>
              
        </Grid>

    );
};

export default Login;

