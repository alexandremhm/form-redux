import React, { Component } from 'react'
import { actionCargo } from '../actions/actionCargo';
import { actionCurriculo } from '../actions/actionCurriculo';
import { actionDescricao } from '../actions/actionDescricao';
import { connect } from 'react-redux';

class WorkData extends Component {
  render() {
    const { cargo, setCargo, descricao, setDescricao, curriculo, setCurriculo } = this.props;
    return (
      <div>
        <fieldset className='form'>
          <label htmlFor="curriculo">Currículo:
            <textarea name="curriculo" id="curriculo" value={curriculo} onChange={(event) => setCurriculo(event.target.value)} cols="30" rows="10" maxLength='1000'></textarea>
          </label>
          <label htmlFor="cargo">Cargo:
            <input type="text" name='cargo' value={cargo} onChange={(event) => setCargo(event.target.value)} maxLength='40' required />
          </label>
          <label htmlFor="descricao">Descrição do cargo:
            <textarea name="descricao" id="descricao" value={descricao} onChange={(event) => setDescricao(event.target.value)} cols="30" rows="10" maxLength='500'></textarea>
          </label>
        </fieldset>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  curriculo: state.personalReducer.curriculo,
  cargo: state.personalReducer.cargo,
  descricao: state.personalReducer.descricao,  
})

const mapDispatchToProps = (dispatch) => ({
  setCurriculo: (curriculo) => dispatch(actionCurriculo(curriculo)),
  setCargo: (cargo) => dispatch(actionCargo(cargo)),
  setDescricao: (descricao) => dispatch(actionDescricao(descricao)),  
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkData);
