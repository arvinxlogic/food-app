import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    // console.log("child constructor is called");
  }
  async componentDidMount() {
    // console.log(this.props.name + "child componennt did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log;
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + "child render is called");
    // const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:@akshaymarch7</h4>
      </div>
    );
  }
}
export default UserClass;
