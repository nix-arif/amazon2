import Product from "./components/Product"

function App() {
    return (
		<div className="grid-container">
			<header className="row">
				<div>
					<a className="brand" href="index.html">amazon</a>
				</div>
				<div>
					<a href="cart.html">Cart</a>
					<a href="signin.html">Sign In</a>
				</div>
			</header>
			<main>
				<Product />
			</main>
			<footer className="row center">All right reserved</footer>
		</div>
    )
}

export default App;
