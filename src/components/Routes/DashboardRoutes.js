
import BlueprintOverview from "../Blueprint/BlueprintOverview";
import EditBlueprint from "../Blueprint/EditBlueprint";
import NewBlueprint from "../Blueprint/NewBlueprint";
import ViewBlueprint from "../Blueprint/ViewBlueprint";
import ContractDetails from "../Contract/ContractDetails";
import ContractOverview from "../Contract/ContractOverview";
import DashboardOverview from "../Dashboard/DashboardOverview";

const dashboardRoutes = [
    { path: "", name: "Overview", Component: DashboardOverview, showInSidebar: true },
    { path: "blueprint", name: "Blueprint", Component: BlueprintOverview, showInSidebar: true },
    { path: "blueprint/new", Component: NewBlueprint, showInSidebar: false },
    { path: "blueprint/view/:id", Component: ViewBlueprint, showInSidebar: false },
    { path: "blueprint/edit/:id", Component: EditBlueprint, showInSidebar: false },
    { path: "contract", name: "Contract", Component: ContractOverview, showInSidebar: true },
    { path: "contract/:id", Component: ContractDetails, showInSidebar: false },
];

export default dashboardRoutes;