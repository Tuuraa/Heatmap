import { observer } from "mobx-react-lite";
import { DashboardController } from "./Dashboard.controller";
import { DashboardView } from "./Dashboard.view";
import { useState } from "react";

const ObservableDashboard = observer(DashboardView);

export function DashboardPage() {
    const [controller] = useState(() => new DashboardController());

    return <ObservableDashboard controller={controller} />
}