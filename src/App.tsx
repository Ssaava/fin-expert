import Home from "@/pages/home";
import { Route, Routes } from "react-router";
import CheckAuth from "./components/common/CheckAuth";
import AuthLayout from "./layouts/auth-layout";
import LandingPageLayout from "./layouts/landing-page-layout";
import SurveyInsightsLayout from "./layouts/survey-insights-layout";
import AccountVerification from "./pages/auth/account-verification";
import CreateAccount from "./pages/auth/create-account";
import Login from "./pages/auth/login";
import ResetPassword from "./pages/auth/reset-password";
import Dashboard from "./pages/dashboard";
import Insights from "./pages/insights";
import Settings from "./pages/settings";
import Survey from "./pages/survey";
import Unauthorized from "./pages/unauthorized";
import UserSurvey from "./pages/user-survey";
import { useAuthStore } from "./store/store";

const App = () => {
  const isAuthenticated = !!useAuthStore((state) => state.fin_token);
  const user_category = useAuthStore((state) => state.user_category);
  console.log(user_category);
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route
        element={
          <CheckAuth
            isAuthenticated={isAuthenticated}
            redirectTo="/dashboard"
            allowUnauthenticated={true}
          />
        }
      >
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="create-account" element={<CreateAccount />} />
        </Route>
      </Route>
      <Route path="account-verification" element={<AccountVerification />} />
      <Route path="password-reset" element={<ResetPassword />} />
      {/* Protected routes - require authentication */}
      <Route
        element={
          <CheckAuth isAuthenticated={isAuthenticated} redirectTo="/auth" />
        }
      >
        {/* Survey routes with role protection */}
        <Route path="/survey">
          <Route index element={<Survey />} />
          <Route
            path={user_category as string}
            element={
              <CheckAuth
                requiredRole={user_category as string}
                userRole={user_category}
                isAuthenticated={isAuthenticated}
                redirectTo="/unauthorized"
              >
                <UserSurvey />
              </CheckAuth>
            }
          />
        </Route>

        {/* Dashboard routes - require authentication but no specific role */}
        <Route path="dashboard" element={<SurveyInsightsLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="survey-insights" element={<Insights />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      {/* Other routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default App;
