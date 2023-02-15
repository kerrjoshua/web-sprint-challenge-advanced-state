import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

function Wheel(props) {

const handleClick = (e) => {
  e.preventDefault()
  if (e.target.id === "clockwiseBtn") {
    props.moveClockwise(props.active, props.wheel);
  }
  if (e.target.id === "counterClockwiseBtn") {
    props.moveCounterClockwise(props.active, props.wheel)
  }
}

  return (
    <div id="wrapper">
      <div id="wheel">
        {props.wheel.map((cog, idx) => {
          return (
            cog === 1 ? 
            <div className="cog active" key={idx} style={{ "--i": idx }}>B</div> :
            <div className="cog" key={idx} style={{ "--i": idx }}></div>
      
        )})}
        
        
        
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleClick}>Counter clockwise</button>
          <button id="clockwiseBtn" onClick={handleClick}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state =>{
  return {
    wheel: state.wheel.wheel,
    active: state.wheel.active
  }}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);
