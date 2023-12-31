import React from "react";
import "./App.css";

function App() {
	const [count, setCount] = React.useState(0);
	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};
	return (
		<div className="App">
			<div>
				<h2>Timer :</h2>
				<h1>{count}</h1>
				<button className="symbol" onClick={decrement}>
					minus
				</button>
				<button className="symbol" onClick={increment}>
					plus
				</button>
			</div>
		</div>
	);
}

export default App;
