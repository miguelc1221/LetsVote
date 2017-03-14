import React, { Component, PropTypes } from "react";
import { Header, Segment, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as pollActions from "../../actions/polls";
import "./MyPolls.css";

class MyPolls extends Component {
  static propTypes = {
    polls: PropTypes.arrayOf(PropTypes.object).isRequired,
    filterDeletedPoll: PropTypes.func,
    deletePoll: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.handleOnDelete = this.handleOnDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPolls();
  }

  handleOnDelete(poll) {
    this.props.filterDeletedPoll(poll);
    this.props.deletePoll(poll._id);
  }

  render() {
    const { polls } = this.props;
    return (
      <div className="my-polls">
        <Segment className="my-polls__seg-container">
          <Header textAlign="center" as="h1">
            My Polls
          </Header>
          <Segment.Group stacked className="my-polls__seg-group">
            {polls.map(val => {
              return (
                <Segment clearing className="my-polls__seg" key={val._id}>
                  {val.question}
                  <div className="my-polls__btn">
                    <Button
                      size="small"
                      color="youtube"
                      floated="right"
                      onClick={this.handleOnDelete.bind(this, val)}
                    >
                      Delete
                    </Button>
                    <Button size="small" color="olive" floated="right">
                      Chart
                    </Button>
                    <Link to={`/vote/${val._id}`}>
                      <Button size="small" color="blue" floated="right">
                        Vote
                      </Button>
                    </Link>
                  </div>
                </Segment>
              );
            })}
          </Segment.Group>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  polls: state.polls.polls
});

export default connect(mapStateToProps, pollActions)(MyPolls);
