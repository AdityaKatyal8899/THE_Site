import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "./pages/Home";
import { Download } from "./pages/Download"; // Keep Download import as it's not explicitly removed from imports, though its route is.
import { DocsLayout } from "./pages/docs/DocsLayout";
import { Introduction } from "./pages/docs/Introduction";
import { GettingStarted } from "./pages/docs/GettingStarted";
import { Variables } from "./pages/docs/Variables";
import { DataTypes } from "./pages/docs/DataTypes";
import { Input } from "./pages/docs/Input";
import { Output } from "./pages/docs/Output";
import { Operators } from "./pages/docs/Operators";
import { IfPage } from "./pages/docs/IfPage";
import { IfElsePage } from "./pages/docs/IfElsePage";
import { LoopsOverview } from "./pages/docs/LoopsOverview";
import { LoopInPage } from "./pages/docs/LoopInPage";
import { LoopTillPage } from "./pages/docs/LoopTillPage";
import { Functions } from "./pages/docs/Functions";
import { ErrorHandling } from "./pages/docs/ErrorHandling";
import { FlowControl } from "./pages/docs/FlowControl";
import { CLIDocs } from "./pages/docs/CLIDocs";
import { NotFound } from "./pages/NotFound"; // Keep NotFound import as it's not explicitly removed from imports, though its route is.

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/docs",
    element: <DocsLayout />,
    children: [
      { path: "", element: <Navigate to="introduction" replace /> },
      { path: "introduction", element: <Introduction /> },
      { path: "getting-started", element: <GettingStarted /> },
      { path: "variables", element: <Variables /> },
      { path: "data-types", element: <DataTypes /> },
      { path: "input", element: <Input /> },
      { path: "output", element: <Output /> },
      { path: "operators", element: <Operators /> },
      { path: "if", element: <IfPage /> },
      { path: "if-else", element: <IfElsePage /> },
      { path: "loops-overview", element: <LoopsOverview /> },
      { path: "loopin", element: <LoopInPage /> },
      { path: "looptill", element: <LoopTillPage /> },
      { path: "functions", element: <Functions /> },
      { path: "error-handling", element: <ErrorHandling /> },
      { path: "flow-control", element: <FlowControl /> },
      { path: "cli", element: <CLIDocs /> },
    ],
  },
  { path: "*", element: <NotFound /> }, // Add NotFound as a top-level route
]);
