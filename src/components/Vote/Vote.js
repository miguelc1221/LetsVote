import React, { Component, PropTypes } from "react";
import { Form, Radio, Button, Segment, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import * as pollActions from "../../actions/polls";
import "./Vote.css";

class Vote extends Component {
  static propTypes = {
    fetchSinglePoll: PropTypes.func,
    match: PropTypes.object,
    editPoll: PropTypes.func,
    votingPoll: PropTypes.object,
    isLoadingPolls: PropTypes.bool
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
    const { votingPoll } = this.props;
    return (
      <div className="vote">
        <Segment>
          <Form loading={this.props.isLoadingPolls}>
            <Header as="h1">{votingPoll.question}</Header>
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
  isLoadingPolls: state.polls.isLoadingPolls
});

export default connect(mapStateToProps, pollActions)(Vote);
