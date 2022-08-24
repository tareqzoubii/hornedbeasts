import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      datas: {},
    };
  }

  myFunction = (id) => {
    const testCard = data.find((beast) => beast._id === id);

    this.setState({
      datas:testCard,
      show: true,
    });
  };

  closeModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Main data={data} showing={this.myFunction} />
        <SelectedBeast
          showCard={this.state.show}
          closing={this.closeModal}
          datas={this.state.datas}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
