import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { fakeUsers, User } from "./users";

const SECRET_KEY = "mysecretkey"; // Keep this secret

export interface AuthPayload {
  email: string;
}

// Generate JWT token
export const generateToken = (email: string): string => {
  return jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
};

// Save token in localStorage
export const saveToken = (token: string): void => {
  localStorage.setItem("authToken", token);
};

// Get token from localStorage
export const getToken = (): string | null => {
  return localStorage.getItem("authToken");
};

// Remove token (logout)
export const removeToken = (): void => {
  localStorage.removeItem("authToken");
};

// Check if user is authenticated
export const isAuthenticated = (): AuthPayload | false => {
  const token = getToken();
  if (!token) return false;
  try {
    return jwt.verify(token, SECRET_KEY) as AuthPayload;
  } catch (err) {
    return false;
  }
};

// Fake user authentication (login)
export const loginUser = async (email: string, password: string): Promise<string> => {
  const user: User | undefined = fakeUsers.find((u) => u.email === email);
  if (!user) throw new Error("User not found");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Invalid password");

  const token = generateToken(email);
  saveToken(token);
  return token;
};

// Fake user signup
export const signupUser = async (email: string, password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  fakeUsers.push({ email, password: hashedPassword });

  const token = generateToken(email);
  saveToken(token);
  return token;
};
