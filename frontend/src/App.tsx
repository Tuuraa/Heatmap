import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { AppRouter } from "./app/router";
import { sessionService } from "./services/session.service";

const App = observer(() => {
  useEffect(() => {
    console.log("Initializing session...");
    sessionService.initialize();
  }, []);

  if (sessionService.isLoading) return null;

  return <AppRouter />;
});

export default App;