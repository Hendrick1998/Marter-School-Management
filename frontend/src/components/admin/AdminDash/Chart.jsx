import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Chart extends React.Component {
state = {
  dataDoughnut: {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1", 
          "#FDB45C"
        ]
      }
    ]
  }
}

render() {
    return (
    <MDBContainer>
      <h3>Doughnut chart</h3>
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    </MDBContainer>
    );
  }
}

export default Chart;