// Include React as a dependency
var React = require("react");
// Include the helpers for making API calls
var API = require("../../utils/API");

// Query Component Declaration
var Input= React.createClass({

  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      enteredQuote: ""
    };
  },

  // Whenever we detect ANY change in the textbox, we register it.
  handleChange: function(event) {
    console.log("****");
    console.log("TEXT CHANGED: " + this.state.enteredQuote);

    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // This code handles the sending of the entered quotes to the parent QuotesPanel component
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    console.log(this.state.enteredQuote);
    API.saveQuote(this.state.enteredQuote);
    this.props.displayQuotes();
  },

  // Here we render the Query component
  render: function() {

    return (
      <div className="main-container">

        <div className="row">
          <div className="col-lg-12">

            <div className="panel panel-success">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i> Enter Your Favorite Quote
                  </strong>
                </h1>
              </div>
              <div className="panel-body">

                {/* Note how we associate the text-box inputs with the state values */}
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <h4 className=""><strong>Quote of the Day!</strong></h4>
                    <input
                      type="text"
                      value={this.state.enteredQuote}
                      className="form-control"
                      id="enteredQuote"
                      onChange={this.handleChange}
                      required
                    />
                  </div>

                  {/* Here we create the onClick event that triggers the HandleSubmit */}
                  <div className="pull-right">
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      <h4>Submit</h4>
                    </button>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Input;