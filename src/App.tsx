import { Route, Routes } from "react-router";
import LandingPageLayout from "./layouts/landing-page-layout";
import AuthLayout from "./layouts/auth-layout";
import ManagePasswordLayout from "./layouts/manage-password-layout";
import SurveyLayout from "./layouts/survey-layout";
import Home from "@/pages/home";
import Insights from "./pages/insights";
import SurveyInsightsLayout from "./layouts/survey-insights-layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/survey" element={<SurveyLayout />}></Route>
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
