import React, {Component} from 'react'

class Formulario extends Component{
    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre = (event) =>{
        this.setState({
            nombre: event.target.value
        })
    }

    cambiarFecha = (event)  => {
        this.setState({
            fecha: new Date()
        })
    }

    componentDidMount(){
        let elemento = document.getElementById("elemento")
        let elemento2 = document.getElementById("hachedos")
        console.log(elemento)
        console.log(elemento2)
        console.log("*")

        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState){
        let elemento2 = document.getElementById("hachedos")
        // console.log(elemento2)
        // console.log(prevProps)
        // console.log(prevState)
    }

    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }

    render(){
        return(
            <>
            <h1>{`Formulario: ${this.props.nombreFormulario}`}</h1>
            <h3>{Math.ceil(this.state.fecha/1000)}</h3>
            <form>
                <div className="ed-container">
                    <div className="ed-item l-40 form__item" id="elemento">
                        <label>Nombre de usuario</label>
                        <input type="text" onChange={this.cambiarNombre}/>
                    </div>
                    <div className="ed-item l-60 form__item">
                        <label>Contraseña</label>
                        <input type="text"/>
                    </div>
                    <div className="ed-item form__item">
                        <input className="button full small" type="submit" value="Enviar"/>
                    </div>
                </div>
            </form>
            <div>
                <h2 id="hachedos">{`Hola. tu nombre es ${this.state.nombre}`}</h2>
            </div>
            </>
        )
    }
}

export default Formulario