import Home from "@/pages/home";
import { Route, Routes } from "react-router";
import AuthLayout from "./layouts/auth-layout";
import LandingPageLayout from "./layouts/landing-page-layout";
import ManagePasswordLayout from "./layouts/manage-password-layout";
import SurveyInsightsLayout from "./layouts/survey-insights-layout";
import Insights from "./pages/insights";
import Survey from "./pages/survey";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/survey">
        <Route index element={<Survey />} />
      </Route>
      <Route path="/survey-insights" element={<SurveyInsightsLayout />}>
        <Route index element={<Insights />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}></Route>
      <Route path="/manage-password" element={<ManagePasswordLayout />}></Route>
      <Route path="*" element={<div>404</div>}></Route>
    </Routes>
  );
};

export default App;
