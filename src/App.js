import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "./Form";

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

  // testForm=(hornd)=>{
  //   let selectedHorn = data.filter (val=>val.horns == hornd)
  //   let toBeUsed = (hornd == 0) ? data : selectd
  //   this.setState({
  //     dataOfHornd : selectd,
  //     dataTobeRender : toBeUsed
  //   })

  render() {
    return (
      <div>
        <Header hornForms={this.allHorns}/>
        <Main data={data} showing={this.myFunction} />
        <SelectedBeast
          showCard={this.state.show}
          closing={this.closeModal}
          datas={this.state.datas}
          hornForms={this.state}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
