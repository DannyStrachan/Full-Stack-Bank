import React from 'react'

export default (props) => (
  <select onChange={e => props.changeFn(props.prop, e)}>
    {props.children}
  </select>
)