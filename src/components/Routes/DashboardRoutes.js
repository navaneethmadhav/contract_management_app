
import BlueprintOverview from "../Blueprint/BlueprintOverview";
import NewBlueprint from "../Blueprint/NewBlueprint";
import DashboardOverview from "../Dashboard/DashboardOverview";

const dashboardRoutes = [
    { path: "", name: "Overview", Component: DashboardOverview, showInSidebar: true },
    { path: "blueprint", name: "Blueprint", Component: BlueprintOverview, showInSidebar: true },
    { path: "blueprint/new", Component: NewBlueprint, showInSidebar: false },
];

export default dashboardRoutes;