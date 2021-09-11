import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
	return (
		<div className="app">
			{/* Header / Nav */}
			<Header />
			{/* Home */}
			<Home />
		</div>
	);
}

export default App;
