// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var API = require("../utils/API");

// Create the Main component
var Favorited = React.createClass({

  getInitialState: function() {
    return { savedQuotes: "" };
  },

  // When this component mounts, get all saved articles from our db
  componentDidMount: function() {
    API.getQuotes().then(function(quotesData) {
      this.setState({ savedQuotes: quotesData.data });
      console.log("saved results ", this.state.savedQuotes);
    }.bind(this));
  },
  
  // A helper method for rendering the HTML when we have no saved articles
  renderEmpty: function() {
    return (
      <li className="list-group-item">
        <h3>
          <span>
            <em>Save your first quote...</em>
          </span>
        </h3>
      </li>
    );
  },

  // A helper method for mapping through our articles and outputting some HTML
  renderQuotes: function() {
    //let quotes = this.state.savedQuotes.data;
    return this.state.savedQuotes.map(function(quote, index) {
      console.log(quote.favorited);
      if(quote.favorited){
        return (
            <div key={index}>
            <li className="list-group-item">
                <h3>
                <span>
                    <em>{quote.text}</em>
                </span>
                </h3>
            </li>
            </div>
        );
      }
    }.bind(this));
  }, 
  
  // A helper method for rendering a container and all of our artiles inside
  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-download" aria-hidden="true"></i> Favorite Quotes!!!</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderQuotes()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  // Our render method. Utilizing a few helper methods to keep this logic clean
  render: function() {
    // If we have no articles, we will return this.renderEmpty() which in turn returns some HTML
    if (!this.state.savedQuotes) {
      return this.renderEmpty();
    }
    // If we have articles, return this.renderContainer() which in turn returns all saves articles
    return this.renderContainer();
  }
});

// Export the module back to the route
module.exports = Favorited;
