import React from 'react'
import PropTypes from 'prop-types'

const Curso = (props) => {
  return(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src={props.img} alt={props.titulo}/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            {1 + 5}
          </h3>
          <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
              <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                  <img src="" alt="aa"/>
                </div>
              </div>
              <span className="small">{props.titulo}</span>
            </div>
          </div>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">{props.price}</a>
          </div>
        </div>
      </article>
    )
}

Curso.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
}

Curso.defaultProps = {
  title: "No hay titulo",
  img: "NO IMG",
  price: "Sin precio",
}

export default Curso;