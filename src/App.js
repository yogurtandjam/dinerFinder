import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import Results from './Components/Results';
import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';
import $ from 'jquery';


const Container = styled.div`
  text-align: center;
  max-width: 1000px;
  margin:auto;
  height:100%;
  background-color: white;
  box-shadow: 0 6px 18px 1px rgba(0,0,0,.2);
  display:flex;
  flex-direction:column
  font-family: helvetica;
`

const Body = styled.div`
  display:flex;
  flex-direction:row;
  height:550px;
`
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      searchResults: [],
      foodTypes: {},
      queryTime: 0,
      restaurantCount: 0,
      pageNumber: 0,
      maxPages: 0,
      firstSearch: true
    }
    
    this.client =  algoliasearch('UDMP9G16OH','fb09c98d7073518ff172422dd910a1dd');
    this.helper = algoliasearchHelper(this.client, 'Algolia', {
      facets: ['food_type', 'payment_options']
    });
    this.usersIp = '';
    this.helper.on('result', content => this.renderHits(content));
    this.end = 0;
    this.start = 0;
    this.executeSearch = this.executeSearch.bind(this);
    this.renderHits = this.renderHits.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.refineSearch = this.refineSearch.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.startOver = this.startOver.bind(this);
    this.makeReservation = this.makeReservation.bind(this);
    this.toggleBackground = this.toggleBackground.bind(this);
    this.setUserIp = this.setUserIp.bind(this);
  }

  componentDidMount() {
    this.setUserIp();
  }

  setUserIp() {
    this.getUserIp((data, err) => {
      if (err) console.log(err)
      else this.usersIp = data;
    });
    this.client.setExtraHeader('X-Forwarded-For', this.usersIp);
  }

  getUserIp(callback) {
    $.getJSON("http://ipinfo.io", function(data, err){
      if (err) callback(err, null)
      callback(null, data.ip)
    });
  }


  renderHits(content) {
    const results = content.hits;
    const foodTypes = content['_rawResults'][0].facets['food_type'];
    const time = ((this.end - this.start)/1000).toFixed(4);
    const restaurantCount = content.nbHits;
    const pageNumber = content.page;
    const maxPages = content.nbPages;
    this.setState({ 
      searchResults: results,
      foodTypes: foodTypes,
      queryTime: time,
      pageNumber: pageNumber,
      restaurantCount: restaurantCount,
      maxPages: maxPages,
      firstSearch: false
    })
  }



  handleChange(e) {
    this.setState({ searchValue: e.target.value});
    this.executeSearch(e.target.value);
  }

  executeSearch(query) {
    this.start = window.performance.now();
    this.helper.setQuery(query)
      .setQueryParameter('aroundLatLngViaIP', true)
      .search()
    this.end = window.performance.now();
  }

  refineSearch(facet, facetValue) {
    this.helper.toggleFacetRefinement(facet, facetValue)
      .search();
  }

  nextPage() {
    this.helper.nextPage().search();
  }

  startOver() {
    this.helper.setPage(0).search();
  }

  makeReservation(restaurant) {
    window.open(restaurant, 'mywindow')
  }

  toggleBackground(e) {
    let el = e.target.style;
    if (el.backgroundColor === 'rgb(47, 160, 209)') {
      el.backgroundColor = 'white';
      el.color = 'black';
    } else {
      el.backgroundColor = '#2FA0D1';
      el.color = 'white';
    }
  }
  

  render() {
    return (
      <Container>
          <SearchBar
            executeSearch={this.executeSearch}
            searchValue={this.state.searchValue}
            handleChange={this.handleChange}
          />
          <Body>
            <Filter
              refineSearch={this.refineSearch}
              foodTypes={this.state.foodTypes}
              toggleBackground={this.toggleBackground}/>
            <Results
              restaurantCount={this.state.restaurantCount}
              restaurants={this.state.searchResults}
              queryTime={this.state.queryTime}
              nextPage={this.nextPage}
              pageNumber={this.state.pageNumber}
              maxPages={this.state.maxPages}
              startOver={this.startOver}
              makeReservation={this.makeReservation}
              firstSearch={this.state.firstSearch}/>
          </Body>
      </Container>
    );
  }
}

export default App;
