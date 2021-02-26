import React from 'react'

const Curso = () => {
  return(
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="https://http2.mlstatic.com/D_NQ_NP_979836-MEC44640967755_012021-O.webp" alt="poster"/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            Programación orientada a objetos con Go
          </h3>
          <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
              <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                  <img src="https://http2.mlstatic.com/D_Q_NP_964499-MEC40151993311_122019-AB.webp" alt="aa"/>
                </div>
              </div>
              <span className="small">Alexys Lozada</span>
            </div>
          </div>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
          </div>
        </div>
      </article>
    )
}

export default Curso;