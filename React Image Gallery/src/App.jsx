// Import necessary components from their respective files
import { HomePage } from "./Pages/HomePage";
import { SinglePhoto } from "./Pages/SinglePhoto";
import { CustomRoute } from "./routes/CustomRoute";

// Define the main App component
const App = () => {
  // Render the CustomRoute component
  // This is the entry point of your application
  return <CustomRoute />;
};

// Export the App component as the default export of this module
export default App;
