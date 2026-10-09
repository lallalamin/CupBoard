import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MealPlanPage from "./pages/MealPlanPage";
import PantryPage from "./pages/PantryPage";
import RecipePage from "./pages/RecipePage";
import RecipesPage from "./pages/RecipesPage";
import GroceryPage from "./pages/GroceryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/pantry" element={<PantryPage />} />

        <Route path="/recipes" element={<RecipesPage />} />

        <Route path="/recipes/:recipeId" element={<RecipePage />} />

        <Route path="/meal-plan" element={<MealPlanPage />} />
        
        <Route path="/grocery" element={<GroceryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;