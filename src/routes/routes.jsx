import { Navigate, Outlet, useRoutes } from "react-router-dom";
// Auth Imports

// Dash Imports
// import DashboardLayout from "../layouts/dashboard/index";

import { Box, LinearProgress } from "@mui/material";
import { lazy, Suspense } from "react";



// Loading fallback
const renderFallback = (
  <Box
    sx={{
      height: "100vh", // full screen height
      width: "100%", // full width
      display: "flex",
      alignItems: "center", // vertical center
      justifyContent: "center", // horizontal center
      backgroundColor: "#F8F9FB", // 👈 yahan apna bg color rakh sakte ho
    }}
  >
    <LinearProgress
      sx={{
        width: "300px",
        borderRadius: "4px",
      }}
    />
  </Box>
);


// Private Route
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};


// Routes function
export function Routes() {
  return useRoutes([
    {
      element: (
        <PrivateRoute>
          {/* <DashboardLayout> */}
            <Suspense fallback={renderFallback}>
              <Outlet />
            </Suspense>
          {/* </DashboardLayout> */}
        </PrivateRoute>
      ),
      children: [{ element: <h1>Home Page</h1>, index: true }],
    },
    {
      path: "sign-up",
      element: <h1>Signup</h1>,
    },
    {
      path: "login",
      element: <h1>Login</h1>,
    },
  ]);
}
