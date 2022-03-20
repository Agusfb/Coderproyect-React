
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarr from './Layouts/Navbar';
import ItemCount from './Components/ItemCount';
import './styles/ItemCount.css';
function App() {
  return (
    <div className="App">
      <NavBarr/>
      <ItemCount/>
    </div>
  );
}

export default App;
