// import logo from './logo.svg';
import './styles/styles.scss';
import Curso from './Curso'
import PropTypes from 'prop-types'

const persona = {
  "nombre":"Luis",
  "apellido":"CCC"
}

const cursos = [
  {
    image:
      "https://edteam-media.s3.amazonaws.com/courses/small/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg",
    title: "Java Script desde cero",
    profesorImage:
      "https://edteam-media.s3.amazonaws.com/users/thumbnail/0f4bb48f-f3fb-4396-9b04-c5ed90569924.jpg",
    profesor: "Alberto Santos",
    price: "20",
  },
  {
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/23f1f71c-3fa1-49ff-a7f5-0666dee581e5.png",
    title: "Net Core",
    profesorImage:
      "https://edteam-media.s3.amazonaws.com/users/thumbnail/f242d8c4-f809-4e4c-baec-05abcaea3256.png",
    profesor: "Fernando Ochoa",
    price: "15",
  },
  {
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/59fbcbab-90ee-4971-b804-a29ca9d5f484.png",
    title: "Vim desde cero",
    profesorImage:
      "https://edteam-media.s3.amazonaws.com/users/thumbnail/66f015b2-0dfb-4ba9-bd0d-f7a7e1855275.jpeg",
    profesor: "Alexis Lozada",
    price: "12",
  },
  {
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/9ccf39c6-3e21-411d-9f09-c3589cf93750.png",
    title: "Java Lamda exprecions",
    profesorImage:
      "https://lh3.googleusercontent.com/a-/AOh14GgKgF5grt9w-ZkzeW4T4gpO_9Wf7rB9xRTLwxRTqcI=s96-c",
    profesor: "Juan Fernandez",
    price: "30",
  },
  {
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/6cbc514c-1e04-4bf4-8beb-fa595f363d9d.png",
    title: "Java con Spring",
    profesorImage:
      "https://lh3.googleusercontent.com/a-/AOh14GgKgF5grt9w-ZkzeW4T4gpO_9Wf7rB9xRTLwxRTqcI=s96-c",
    profesor: "Juan Fernandez",
    price: "35",
  },
  {
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/e7fbb7f9-773c-426a-bbb5-14276a37af33.png",
    title: "La ruta del desarrolo web",
    profesorImage:
      "https://edteam-media.s3.amazonaws.com/users/thumbnail/c2be732e-7341-49ea-8f49-6cc461c42ca4.png",
    profesor: "Alvaro Felipe",
    price: "0",
  },

]

function App() {
  return (
    <>
    <div className="main-banner img-container" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://http2.mlstatic.com/D_NQ_NP_917896-MEC44619738435_012021-O.webp"/>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="#" className="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      {
        cursos.map((curso) =>
          <Curso
            titulo={curso.title}
            img={curso.image}
            price={curso.price}
          />
        )
      }
    </div>
    </>
  );
}

export default App;
