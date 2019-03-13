import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from "../../services/swapi-service";

const Row = ({ leftEl, rightEl }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        { leftEl }
      </div>
      <div className="col-md-6">
        { rightEl }
      </div>
    </div>
  )
}

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList 
          onItemSelected={this.onPersonSelected}
          getData={this.swapiService.getAllPeople}>
          {
            (i) => `${i.name} (${i.gender}, ${i.birthYear})`
          }
      </ItemList>
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    )

    

    return (
      <ErrorBoundary>
        <Row leftEl={itemList} rightEl={personDetails} />
      </ErrorBoundary>
    );
  }
}