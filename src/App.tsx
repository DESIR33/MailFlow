import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthCallback from "./components/auth/AuthCallback";
import RequireAuth from "./components/auth/RequireAuth";
import Settings from "./components/settings/Settings";
import { AuthProvider } from "./contexts/AuthContext";
import routes from "tempo-routes";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/settings"
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </Suspense>
    </AuthProvider>
  );
}

export default App;
