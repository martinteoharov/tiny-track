import Noty from "noty";
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/mint.css";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface ErrorResponse {
  message: string;
}

const backendUrl = import.meta.env.VITE_BACKEND_ENDPOINT as string;

async function loginUser(loginRequest: LoginRequest): Promise<AuthResponse> {
  const response = await fetch(`${backendUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginRequest),
  });
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    new Noty({
      type: "error",
      layout: "topRight",
      text: error.message || "Failed to login",
      timeout: 3000,
    }).show();
    throw new Error(error.message || "Failed to login");
  }
  new Noty({
    type: "success",
    layout: "topRight",
    text: "Logged in successfully!",
    timeout: 3000,
  }).show();

  return response.json();
}

async function registerUser(registerRequest: RegisterRequest): Promise<void> {
  const response = await fetch(`${backendUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerRequest),
  });
  if (!response.ok) {
    const error: ErrorResponse = await response.json();
    new Noty({
      type: "error",
      layout: "topRight",
      text: error.message || "Failed to register",
      timeout: 3000,
    }).show();
    throw new Error(error.message || "Failed to register");
  }
  new Noty({
    type: "success",
    layout: "topRight",
    text: "Registered successfully!",
    timeout: 3000,
  }).show();
  return response.json();
}

export { loginUser, registerUser };
