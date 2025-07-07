// import Count from "./count/Count";

import { ItemAddModal } from "./pages/home/itemAdd/ItemAddModal";
import ItemPage from "./pages/home/items/ItemPage";

function App() {
  return (
    <>
      {/* <Count /> */}
      <div className="flex flex-col items-center mt-10">
        <ItemPage />
        <ItemAddModal />
      </div>
    </>
  );
}

export default App;
