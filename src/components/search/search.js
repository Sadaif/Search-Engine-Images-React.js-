import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResults from '../Image-Results/Images-Results';
import s from './search-engine.png';
class Search extends Component {
    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '9549854-c03ad814cb317947749729b5b',
        images: []
    };

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
          if (val === '') {
            this.setState({ images: [] });
          } else {
            axios
              .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                  this.state.searchText
                }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
              )
              .then(res => this.setState({ images: res.data.hits }))
              .catch(err => console.log(err));
          }
        });
      };
 
      onAmountChange = (e, index, value) => this.setState({ amount: value });


    render() {
        console.log(this.state.images); 
        return(
             
           <div>
          <img className="Image" alt="logo" src={s} />
            <div className="Search">  
            <TextField
              className="Data"
              name="searchText"
              value={this.state.searchText}
              onChange={this.onTextChange}
              floatingLabelText="Search For Images"
              
               
               
            />
            <br />
             <br />
            <SelectField
              name="amount"
              floatingLabelText="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            >
              <MenuItem value={5} primaryText="5" />
              <MenuItem value={10} primaryText="10" />
              <MenuItem value={15} primaryText="15" />
              <MenuItem value={30} primaryText="30" />
              <MenuItem value={50} primaryText="50" />
               
            </SelectField>
            <br />
            {this.state.images.length > 0 ? (
              <ImageResults images={this.state.images} />
            ) : null}
          
             <ImageResults />
          </div>
          </div>
        )
    }
}

export default Search;