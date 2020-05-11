import React, { Component } from 'react';
//import "./styles.css"
import api from "../../services/api"

export default class searchPage extends Component {

    state = {
        errorMsg: "",
        extension: ""
    }

    handleSubmit = async e => {
        e.preventDefault();
        await api
            .post('/', JSON.stringify({
                errorMsg: this.state.errorMsg,
                extension: this.state.extension
            }))
            .then(function (res) {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleChange = e => {
        this.setState({  [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    render() {
        return (
            <>
                <div class="tela">
                    <form className="pesquisa"
                        onSubmit={this.handleSubmit}>
                        <textarea
                            name="errorMsg"
                            placeholder="errorMsg"
                            onChange={this.handleChange}
                        ></textarea>
                        <select
                            name="extension"
                            placeholder="Selecione a linguagem"
                            onChange={e => this.setState({
                                extension: e.target.value
                            })}
                        >
                            <option selected>Selecione a linguagem</option>
                            <option value=".java">Java</option>
                            <option value=".c">C</option>
                            <option value=".cpp">C++</option>
                            <option value=".python">Python</option>
                        </select>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </>
        )
    }
}