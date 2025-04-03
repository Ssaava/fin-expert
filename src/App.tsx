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

const App = () => {
  // These should come from your authentication context or state
  const isAuthenticated = false; // Replace with actual auth state
  const userRole = "fintech_user"; // Replace with actual user role ("fintech_user", "regulator", etc.)

  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Protected routes - only for authenticated users */}
      <Route
        element={
          <CheckAuth isAuthenticated={!isAuthenticated} redirectTo="/" />
        }
      >
        <Route path="/survey">
          <Route index element={<Survey />} />

          {/* Fintech User Survey - only for fintech_user role */}
          <Route
            path="fintech_user"
            element={
              <CheckAuth
                isAuthenticated={isAuthenticated}
                redirectTo="/"
                requiredRole="fintech_user"
                userRole={userRole}
              >
                <FintechUserSurvey />
              </CheckAuth>
            }
          />

          {/* Regulator Survey - only for regulator role */}
          <Route
            path="regulator"
            element={
              <CheckAuth
                isAuthenticated={isAuthenticated}
                redirectTo="/"
                requiredRole="regulator"
                userRole={userRole}
              >
                <RegulatorSurvey />
              </CheckAuth>
            }
          />

          <Route
            path="service-provider"
            element={
              <CheckAuth
                isAuthenticated={isAuthenticated}
                redirectTo="/"
                requiredRole="service_provider"
                userRole={userRole}
              >
                <ServiceProviderSurvey />
              </CheckAuth>
            }
          />

          <Route
            path="developer"
            element={
              <CheckAuth
                isAuthenticated={isAuthenticated}
                redirectTo="/"
                requiredRole="developer"
                userRole={userRole}
              >
                <DeveloperSurvey />
              </CheckAuth>
            }
          />
        </Route>

        <Route path="dashboard" element={<SurveyInsightsLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="survey-insights" element={<Insights />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>

      <Route
        element={
          <CheckAuth
            isAuthenticated={isAuthenticated}
            redirectTo="/dashboard"
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
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  );
};

export default App;
