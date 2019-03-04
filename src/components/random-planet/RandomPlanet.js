import React, { Component } from 'react';

import SWAppService from '../../services/SWAppService.js';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

  constructor() {
    super();
    this.updatePlanet();
  };

  swAppService = new SWAppService();

  state = {
    planetName: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  updatePlanet() {
    this.swAppService.getPlanet(7).that((planet) => {
      console.log(planet)
      // this.setState({
      //   planetName: planet.name,
      //   population: planet.population,
      //   rotationPeriod: planet.rotation_period,
      //   diameter: planet.diameter
      // });
    });
  }

  render() {
    const { planetName, population, rotationPeriod, diameter } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image" src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
        <div>
          <h4>{ planetName }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{ population }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{ rotationPeriod }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{ diameter }</span>
            </li>
          </ul>
        </div>
      </div>




    );
  }
}