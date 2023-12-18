import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ClassImageComponent from "./components/ClassImageComponent";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<ButtonComponent style={{ backgroundColor: "red", color: "yellow" }} text="testo del bottone" />
				<ButtonComponent text="secondo testo" />

				<ClassImageComponent
					src="https://images.unsplash.com/photo-1682687982298-c7514a167088?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="tizio che nuota"
					width="200px"
					height="200px"
				/>
				<ClassImageComponent
					src="https://images.unsplash.com/photo-1702651478488-523b6da9ec8e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="tipa coi capelli rossi"
					width="200px"
					height="200px"
				/>
			</header>
		</div>
	);
}

export default App;
