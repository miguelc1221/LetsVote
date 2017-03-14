import React, { Component } from "react";
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import * as pollActions from "../../actions/polls";
import "./Chart.css";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    const { fetchSinglePoll, match } = this.props;
    fetchSinglePoll(match.params.id);
  }

  render() {
    if (this.props.isLoadingPolls) {
      return <div><Loader active inline="centered" /></div>;
    }
    const data = [
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 2000, pv: 8, amt: 2290 },
      { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 18, pv: 4800, amt: 2181 },
      { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
    ];
    return (
      <div className="chart">
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" minPointSize={5} />
        </BarChart>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  votingPoll: state.polls.votingPoll,
  isLoadingPolls: state.polls.isLoadingPolls
});

export default connect(mapStateToProps, pollActions)(Chart);
