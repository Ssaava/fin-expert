import Home from "@/pages/home";
import { Route, Routes } from "react-router";
import AuthLayout from "./layouts/auth-layout";
import LandingPageLayout from "./layouts/landing-page-layout";
import ManagePasswordLayout from "./layouts/manage-password-layout";
import SurveyInsightsLayout from "./layouts/survey-insights-layout";
import CreateAccount from "./pages/auth/create-account";
import Login from "./pages/auth/login";
import DeveloperSurvey from "./pages/developer-survey";
import FintechUserSurvey from "./pages/fintech-user-survey";
import Insights from "./pages/insights";
import RegulatorSurvey from "./pages/regulator-survey";
import ServiceProviderSurvey from "./pages/service-provider-survey";
import Settings from "./pages/settings";
import Survey from "./pages/survey";
import AccountVerification from "./pages/auth/account-verification";
import ResetPassword from "./pages/auth/reset-password";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/survey">
        <Route index element={<Survey />} />
        <Route path="user" element={<FintechUserSurvey />} />
        <Route path="regulator" element={<RegulatorSurvey />} />
        <Route path="service-provider" element={<ServiceProviderSurvey />} />
        <Route path="developer" element={<DeveloperSurvey />} />
      </Route>
      <Route path="/survey-insights" element={<SurveyInsightsLayout />}>
        <Route index element={<Insights />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />
      </Route>
      <Route path="account-verification" element={<AccountVerification />} />
      <Route path="password-reset" element={<ResetPassword />} />
      <Route path="/manage-password" element={<ManagePasswordLayout />}></Route>
      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  );
};

export default App;
