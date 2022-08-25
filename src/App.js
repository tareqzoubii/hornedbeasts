import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
import Forms from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      datas: {},
      hornesInfo: {},
      dataApears: data
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

  testForm=(hornes)=>{
    const allOfTheHorns = data.filter (val=>val.horns == hornes)
    let theyAreSelected = (hornes == 0) ? data : allOfTheHorns
    this.setState({
      hornesInfo : allOfTheHorns,
      dataApears : theyAreSelected
    })
  }
  render() {
    return (
      <div>
        <Header/>
        <Forms testForm={this.testForm}/>
        <Main data={this.state.dataApears} showing={this.myFunction} />
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
