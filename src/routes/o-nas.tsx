import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/o-nas")({
  component: () => <Outlet />,
});