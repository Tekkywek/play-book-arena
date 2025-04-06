
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Sports from "./pages/Sports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/features" element={<Sports />} /> {/* Temporarily pointing to Sports */}
          <Route path="/pricing" element={<Dashboard />} /> {/* Temporarily pointing to Dashboard */}
          <Route path="/about" element={<Index />} /> {/* Temporarily pointing to Index */}
          <Route path="/profile" element={<Dashboard />} /> {/* Temporarily pointing to Dashboard */}
          <Route path="/workouts" element={<Sports />} /> {/* Temporarily pointing to Sports */}
          <Route path="/teams" element={<Dashboard />} /> {/* Temporarily pointing to Dashboard */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
