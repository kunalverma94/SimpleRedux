import React, { Component } from 'react'
import { connect } from 'react-redux'
class App extends Component {
  render () {
    return (
      <>
        <h1>{JSON.stringify(this.props)}</h1>
        <div onClick={() => this.props.acts()}>foo</div>
      </>
    )
  }
}
const mapStateToProps = state => ({
  state
})

const mapDispatchToProps = {
  acts: () => dispatch => dispatch({ type: 'www', data: 99 }) // Usually modev to Actions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
