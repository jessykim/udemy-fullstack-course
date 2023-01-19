import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyReview from './SurveyFormReview'

class SurveyNew extends Component {
  state = { showFormReview: false }

  renderContent() {
    if (this.state.showFormReview === true) {
      return <SurveyReview onCancel={() => this.setState({ showFormReview: false })} />
    }
    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew)