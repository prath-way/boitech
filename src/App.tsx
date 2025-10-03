import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Chatbot from "./pages/Chatbot";
import MedGuard from "./pages/MedGuard";
import PredictGuard from "./pages/PredictGuard";
import MindGuard from "./pages/MindGuard";
import FitGuard from "./pages/FitGuard";
import RescueGuard from "./pages/RescueGuard";
import FundGuard from "./pages/FundGuard";
import HealthJournal from "./pages/HealthJournal";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="bioguard-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/medguard" element={<MedGuard />} />
            <Route path="/predictguard" element={<PredictGuard />} />
            <Route path="/mindguard" element={<MindGuard />} />
            <Route path="/fitguard" element={<FitGuard />} />
            <Route path="/rescueguard" element={<RescueGuard />} />
            <Route path="/fundguard" element={<FundGuard />} />
            <Route path="/health-journal" element={<HealthJournal />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
