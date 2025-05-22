import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import TodoList from "./components/TodoList";
import Input from "./components/Input";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="bg-[#0D0D0D] h-screen text-white flex flex-col justify-center items-center">
          <h1 className="text-white font-bold text-4xl pb-7">Todo List</h1>
          <Input />
          <TodoList />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App
