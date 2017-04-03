import React, { Component, PropTypes } from "react";
import { Header, Icon, Input, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as pollActions from "../../actions/polls";
import "./NewPoll.css";

const uniqueId = () => {
  let id = 2;
  return function() {
    return ++id;
  };
};

const id = uniqueId();

export class NewPoll extends Component {
  static propTypes = {
    savePoll: PropTypes.func,
    isSavingPolls: PropTypes.bool,
    polls: PropTypes.arrayOf(PropTypes.object)
  };

  constructor(props) {
    super(props);

    this.state = {
      question: "",
      options: [
        {
          value: "",
          votes: 0,
          placeHolder: "Pizza",
          id: 1
        },
        {
          value: "",
          votes: 0,
          placeHolder: "Mash Potatoes",
          id: 2
        }
      ],
      createdPoll: false
    };

    this.addOption = this.addOption.bind(this);
    this.onQuestionChange = this.onQuestionChange.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onQuestionChange(e) {
    this.setState({ question: e.target.value });
  }

  onInputChange(e) {
    const field = e.target.name;
    const val = e.target.value;
    const stateCopy = [...this.state.options];
    stateCopy[field].value = val;
    this.setState({ options: stateCopy });
  }

  addOption() {
    const uId = id();
    if (this.state.options.length >= 4) return null;

    this.setState({
      options: this.state.options.concat({
        value: "",
        votes: 0,
        id: uId
      })
    });
  }

  deleteOption(id) {
    const filteredOptions = this.state.options.filter(val => val.id !== id);
    this.setState({ options: filteredOptions });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.question.length === 0) return null;
    this.props.savePoll({
      question: this.state.question,
      options: this.state.options
    });
    this.setState({ createdPoll: true });
  }

  renderOptions() {
    return this.state.options.map((val, idx) => {
      return (
        <Input
          key={val.id}
          name={idx}
          icon={
            <Icon
              name="x"
              onClick={this.deleteOption.bind(this, val.id)}
              inverted
              circular
              link
            />
          }
          placeholder={val.placeHolder}
          onChange={this.onInputChange}
        />
      );
    });
  }

  render() {
    const { polls } = this.props;
    if (this.state.createdPoll) {
      return (
        <div className="newPoll">
          <Header textAlign="center">
            <Header.Content as="h1">
              Congratulations, your poll has been created!
            </Header.Content>
            <Header.Subheader as="h2">
              Share the link below with participants
            </Header.Subheader>
            <Header>
              <h3>
                {polls.length
                  ? <Link to={`/vote/${polls[polls.length - 1]._id}`}>
                      {
                        `http://lets-vote.herokuapp.com/vote/${polls[polls.length - 1]._id}`
                      }
                    </Link>
                  : null}
              </h3>
            </Header>
          </Header>
        </div>
      );
    }

    return (
      <div className="newPoll">
        <Header textAlign="center" as="h1">
          Name your poll
        </Header>
        <Input
          onChange={this.onQuestionChange}
          placeholder="What's you favorite food?"
        />
        <Header textAlign="center" as="h1">
          Options
        </Header>
        {this.renderOptions()}
        <Button color="orange" onClick={this.addOption}>More Options</Button>
        <Button
          color="olive"
          onClick={this.onSubmit}
          disabled={!this.state.question}
          loading={this.props.isSavingPolls}
        >
          Submit
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSavingPolls: state.polls.isSavingPolls,
  polls: state.polls.polls
});

export default connect(mapStateToProps, pollActions)(NewPoll);
