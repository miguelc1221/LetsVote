import React, { Component, PropTypes } from "react";
import { Form, Radio, Button, Segment, Header } from "semantic-ui-react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as pollActions from "../../actions/polls";
import "./Vote.css";

class Vote extends Component {
  static propTypes = {
    fetchSinglePoll: PropTypes.func,
    match: PropTypes.object,
    editPoll: PropTypes.func,
    votingPoll: PropTypes.object,
    isLoadingPolls: PropTypes.bool,
    isVoting: PropTypes.bool,
    pollError: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnVote = this.handleOnVote.bind(this);
  }

  componentDidMount() {
    const { fetchSinglePoll, match } = this.props;
    fetchSinglePoll(match.params.id);
  }

  handleChange(e, { value }) {
    this.setState({ value });
  }

  handleOnVote(e) {
    e.preventDefault();
    this.props.votingPoll.options[parseInt(this.state.value, 10)].votes += 1;
    this.props.editPoll(this.props.votingPoll);
  }

  render() {
    const { isLoadingPolls, votingPoll, isVoting, pollError } = this.props;
    if (pollError.message) {
      return (
        <div className="vote">
          <Segment style={{ padding: 35 }}>
            <h1>{pollError.message}</h1>
          </Segment>
        </div>
      );
    }
    return (
      <div className="vote">
        <Segment>
          <Form loading={isLoadingPolls}>
            <Header as="h1">
              {votingPoll.question}
            </Header>
            {votingPoll.options
              ? votingPoll.options.map((val, idx) => {
                  return (
                    <Form.Field key={val.id}>
                      <Radio
                        label={val.value}
                        name="radioGroup"
                        value={idx.toString()}
                        checked={this.state.value === idx.toString()}
                        onChange={this.handleChange}
                      />
                    </Form.Field>
                  );
                })
              : null}
            <Button
              color="olive"
              className="vote__btn"
              onClick={this.handleOnVote}
              loading={isVoting}
              disabled={!this.state.value}
            >
              Vote
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  votingPoll: state.polls.votingPoll,
  isLoadingPolls: state.polls.isLoadingPolls,
  isVoting: state.polls.isVoting,
  pollError: state.polls.pollError
});

export default connect(mapStateToProps, pollActions)(withRouter(Vote));
