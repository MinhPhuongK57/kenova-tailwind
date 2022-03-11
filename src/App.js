import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Quote from "./components/Quote/Quote";
import NumberCreditCard from "./components/NumberCreditCard/NumberCreditCard";
function App() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden align-center font-poppins text-white px-4 py-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <NavBar />
      <Quote />
      <NumberCreditCard />
    </div>
  );
}

export default App;
