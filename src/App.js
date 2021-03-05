// import logo from './logo.svg';
import './styles/styles.scss';
import Curso from './Curso'
import Banner from './Banner'
import Formulario from './Formulario'

function App() {
  return (
    <>
    <Banner />
    <div className="ed-grid">
      <Formulario nombreFormulario="NOMBRE FORM" />
    </div>
    </>
  );
}

export default App;
