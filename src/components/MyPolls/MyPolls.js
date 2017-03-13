import React, { Component, PropTypes } from "react";
import { Header, Segment, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import * as pollActions from "../../actions/polls";
import "./MyPolls.css";

class MyPolls extends Component {
  static propTypes = {
    polls: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  componentDidMount() {
    this.props.fetchPolls();
  }

  render() {
    const { polls } = this.props;
    return (
      <div className="my-polls">
        <Header textAlign="center" as="h1">
          My polls
        </Header>
        <Segment.Group stacked className="my-polls__seg-group">
          {polls.map(val => {
            return (
              <Segment clearing className="my-polls__seg" key={val._id}>
                {val.question}
                <Button size="small" color="youtube" floated="right">
                  Delete
                </Button>
                <Button size="small" color="olive" floated="right">
                  Chart
                </Button>
                <Button size="small" color="blue" floated="right">
                  Vote
                </Button>
              </Segment>
            );
          })}
        </Segment.Group>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls.polls
});

export default connect(mapStateToProps, pollActions)(MyPolls);
