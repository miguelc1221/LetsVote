import React, { Component, PropTypes } from "react";
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

export class Chart extends Component {
  static propTypes = {
    votingPoll: PropTypes.object,
    isLoadingPolls: PropTypes.bool
  };

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
      return <div className="chart"><Loader active inline="centered" /></div>;
    }

    let data = [];
    if (this.props.votingPoll.options) {
      data = this.props.votingPoll.options.map(val => {
        return { name: val.value, votes: val.votes };
      });
    }

    return (
      <div className="chart">
        <BarChart width={600} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="votes" fill="#f2711c" />
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
