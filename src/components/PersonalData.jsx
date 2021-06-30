import React, { Component } from 'react'
import { connect } from 'react-redux';
import { actionName } from '../actions/actionName'
import { actionAddress } from '../actions/actionAddress'
import { actionEmail } from '../actions/actionEmail'
import { actionCpf } from '../actions/actionCpf'
import { actionCity } from '../actions/actionCity'
import { actionState } from '../actions/actionState'
import { actionMoradia } from '../actions/actionMoradia'

class PersonalData extends Component {  
  render() {
    const { name, setName, cpf, setCpf, email, setEmail, address, setAddress, city, setCity, state, setState, moradia, setMoradia } = this.props;

    const arrayEstados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
    return(
      <div>
        <fieldset className='form'>
          <label htmlFor="name">Nome:
            <input type="text" name='name' value={name.toUpperCase()} onChange={(event) => setName(event.target.value)} maxLength='40' required />
          </label>
          <label htmlFor="email">Email:
            <input type="email" name='email' value={email} onChange={(event) => setEmail(event.target.value)} maxLength='50' required />
          </label>
          <label htmlFor="cpf">CPF:
            <input type="text" name='cpf' value={cpf} onChange={(event) => setCpf(event.target.value)} maxLength='11' required />
          </label>
          <label htmlFor="address">Endereço:
            <input type="text" name='address' value={address.replace(/[^a-zA-Z0-9 ]/g, "")} onChange={(event) => setAddress(event.target.value)} maxLength='200' required />
          </label>
          <label htmlFor="city">Cidade:
            <input type="text" name='city' value={city} onChange={(event) => setCity(event.target.value)} maxLength='28' required />
          </label>
          <label htmlFor="state">Estado:
            <select name="state" id="state" value={state} onChange={(event) => setState(event.target.value)}>
              {arrayEstados.map((estado) => <option value={estado}>{estado}</option>)}
            </select>
          </label>
          <label htmlFor="moradia">
            <input type="radio" name='moradia' value='casa' onChange={(event) => setMoradia(event.target.value)} required />Casa
            <input type="radio" name='moradia' value='apartamento' onChange={(event) => setMoradia(event.target.value)} required />Apartamento
          </label>
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.personalReducer.name,
  email: state.personalReducer.email,
  cpf: state.personalReducer.cpf,
  address: state.personalReducer.address,
  city: state.personalReducer.city,
  state: state.personalReducer.state,
  moradia: state.personalReducer.moradia,
})

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(actionName(name)),
  setEmail: (email) => dispatch(actionEmail(email)),
  setCpf: (cpf) => dispatch(actionCpf(cpf)),
  setAddress: (address) => dispatch(actionAddress(address)),
  setCity: (city) => dispatch(actionCity(city)),
  setState: (state) => dispatch(actionState(state)),
  setMoradia: (moradia) => dispatch(actionMoradia(moradia)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);
