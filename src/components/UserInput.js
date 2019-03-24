import React from 'react'
import { connect } from 'react-redux'

import MicroImage from 'images/microphone.svg'
import SendImage from 'images/send.svg'

import Rodal from 'rodal'
import 'rodal/lib/rodal.css'

import { switchModel, setIsOrganeVisible } from 'src/actions'

export class UserInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }
  
  render() {
    const { visible } = this.state
    const { main: { models, modelSelected, message }, dispatch } = this.props

    return (
      <div className="user-input-container">
        <Rodal customStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} visible={visible} showCloseButton={false} onClose={() => this.setState({ visible: false })}>
          <div className="rodal-message">The input is currently disable, Unitalk is not connected to any back-end</div>
        </Rodal>
        <h1>Unitalk Vocal</h1>
        <div className="line"></div>
        <div>Vous avez sélectionné :</div>
        <div className="message">{ message }</div>
        <textarea />
        <div className="buttons">
          <img className="button" src={MicroImage} width="30" height="30" onClick={() => this.setState({ visible: true })} />
          <img className="button" src={SendImage} width="30" height="30" onClick={() => this.setState({ visible: true })} />
        </div>
        <div className="options">Options</div>
        <div className="options-container">
          { 
            models.map((el, i) => 
              (
                <div key={`options-${i}`} className={`options-item ${modelSelected === i ? "selected" : ""}`} onClick={() => dispatch(switchModel(i))}>
                  {el.name}
                </div>
              )
            )
          }
        </div>
        {
          models[modelSelected].isOrgane &&
            <div className="options-container">
              <div className={`options-item ${!models[modelSelected].isOrganeVisible ? "selected" : ""}`} onClick={() => dispatch(setIsOrganeVisible(modelSelected, false))}>Organes non visibles</div>
              <div className={`options-item ${models[modelSelected].isOrganeVisible ? "selected" : ""}`} onClick={() => dispatch(setIsOrganeVisible(modelSelected, true))}>Organes visibles</div>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { main } = state
  return { main }
}

export default connect(mapStateToProps)(UserInput)