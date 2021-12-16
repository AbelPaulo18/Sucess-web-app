import "./App.css";
import HeaderBar from "./Components/Header/HeaderBar";
import Slideshow from "./Components/SlideShow/Slideshow";
import ListIcon from "./Components/ListIcon/ListIcon";

function App() {
	return (
		<div className="App">
			<div className="cont-1">
				<HeaderBar />

				{/* Carousel */}
				<Slideshow />

				<div className="heroTxt"> Inspire-se com grandes empreendedores </div>

				<ListIcon />
			</div>
		</div>
	);
}

export default App;
