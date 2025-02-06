import "./App.css";

import Popup from "./components/Ingredients/IngredientsPopup/index.tsx";
import { useState } from "react";

import IngredientsView from "./components/IngredientsView/index.tsx";
import Cocktails from "./components/CocktailsList/index.tsx";
import styles from "./App.module.css";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openEditPopup = () => {
    setIsPopupOpen(true);
  };

  const closeEditPopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <>
      <div className={styles.cocktailsWrapper}>
        <div className={styles.cocktails}>
          {/* */}
          <Cocktails />
        </div>
        <div className={styles.ingredients}>
          <IngredientsView />
          <button onClick={openEditPopup}>Edit/Add ingredients</button>
          <Popup isOpen={isPopupOpen} onClose={closeEditPopup}>
            {/* Здесь можно добавить содержимое попапа, например, форму для редактирования/добавления ингредиентов */}
            <h2>Edit Ingredients</h2>
            {/* Ваша форма или другие элементы для редактирования/добавления ингредиентов */}
          </Popup>
        </div>
      </div>
    </>
  );
}

export default App;
