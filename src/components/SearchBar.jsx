import React from 'react';

class SearchBar extends React.Component {
  onInputChange = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Enter search term</label>
            <input
              type="text"
              placeholder="Search Term"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
