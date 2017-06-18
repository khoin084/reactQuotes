// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Input = require("./quotes/Input");
var Quotes = require("./quotes/Quotes");

// Include the helpers for making API calls
var API = require("../utils/API");

// Create the Search component
var QuotesPanel = React.createClass({

  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "results" state. This will be where we hold the data from our results
  getInitialState: function() {
    return {
      quotes: ""
    };
  },

  getQuotes: function() {
    API.getQuotes().then(function(quotesData) {
        console.log("Quots.js to QuotesPanel.js" , quotesData);
        this.setState({ quotes: quotesData.data });
        console.log("new state of quotes: ", this.state.quotes);
        console.log("saved quotes: ", quotesData.data);
        
    }.bind(this));
  },

  // shouldComponentUpdate: function () {
  //   console.log("determine if we should render again?");
  //   return true;
  // },

  componentDidMount: function () {
    console.log("snap-it mounted");
  },

  // Render the component. Note how we deploy both the Input and the Quotes Components
  render: function() {
    console.log("state of quotes in QuotesPanel.js: ", this.state.quotes);

    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <Input displayQuotes={this.getQuotes}/>
        {/* Note how we pass in the results into this component */}
        <Quotes results={this.state.quotes} />
      </div>
    );
  }
});

// Export the module back to the route
module.exports = QuotesPanel;