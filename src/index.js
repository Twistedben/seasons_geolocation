import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div> Error: {errorMessage} </div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = (
      <Spinner
        activity="Waiting . . ."
        message="Please accept location request to find your hemispheric location."
      />
    );
  }

  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { lat: null, errorMessage: "" };
//   // }

//   state = { lat: null, errorMessage: "" };

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       position => this.setState({ lat: position.coords.latitude }),
//       error => this.setState({ errorMessage: error.message })
//     );
//   }

//   // Helper function to wrap all rendered html. We do this so we can wrap all our return statements based on condition under a parent div.
//   renderContent() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <div>Error: {this.state.errorMessage} </div>;
//     }
//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     }
//     return (

//     );
//   }

//   render() {
//     return <div className="wrapper">{this.renderContent()}</div>;
//   }
// }
