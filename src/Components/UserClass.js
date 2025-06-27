import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("child constructor is called");
  }
  componentDidMount() {
    console.log(this.props.name + "child componennt did mount");
  }
  render() {
    const { name, location } = this.props;
    console.log(this.props.name + "child render is called");
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>count:{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        {/* <h1>count:{count2}</h1> */}
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@akshaymarch7</h4>
      </div>
    );
  }
}
export default UserClass;
