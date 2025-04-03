import Home from "@/pages/home";
import { Route, Routes } from "react-router";
import AuthLayout from "./layouts/auth-layout";
import LandingPageLayout from "./layouts/landing-page-layout";
import SurveyInsightsLayout from "./layouts/survey-insights-layout";
import AccountVerification from "./pages/auth/account-verification";
import CreateAccount from "./pages/auth/create-account";
import Login from "./pages/auth/login";
import ResetPassword from "./pages/auth/reset-password";
import DeveloperSurvey from "./pages/developer-survey";
import FintechUserSurvey from "./pages/fintech-user-survey";
import Insights from "./pages/insights";
import RegulatorSurvey from "./pages/regulator-survey";
import ServiceProviderSurvey from "./pages/service-provider-survey";
import Settings from "./pages/settings";
import Survey from "./pages/survey";
import Dashboard from "./pages/dashboard";
import Unauthorized from "./pages/unauthorized";
import CheckAuth from "./components/common/CheckAuth";
import { useAuthStore } from "./store/store";

const App = () => {
  const isAuthenticated = !!useAuthStore((state) => state.fin_token);
  const userRole: string | null = useAuthStore((state) => state.user_role);

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
            path="fintech_user"
            element={
              <CheckAuth
                requiredRole="fintech_user"
                userRole={userRole}
                isAuthenticated={isAuthenticated}
                redirectTo="/unauthorized"
              >
                <FintechUserSurvey />
              </CheckAuth>
            }
          />

          <Route
            path="regulator"
            element={
              <CheckAuth
                requiredRole="regulator"
                userRole={userRole}
                isAuthenticated={isAuthenticated}
                redirectTo="/unauthorized"
              >
                <RegulatorSurvey />
              </CheckAuth>
            }
          />

          <Route
            path="service_provider"
            element={
              <CheckAuth
                requiredRole="service_provider"
                userRole={userRole}
                isAuthenticated={isAuthenticated}
                redirectTo="/unauthorized"
              >
                <ServiceProviderSurvey />
              </CheckAuth>
            }
          />

          <Route
            path="developer"
            element={
              <CheckAuth
                requiredRole="developer"
                userRole={userRole}
                isAuthenticated={isAuthenticated}
                redirectTo="/unauthorized"
              >
                <DeveloperSurvey />
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
