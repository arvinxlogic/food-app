import React from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';


class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor")
  }
  componentDidMount(){
    console.log("Parent Component Did Mount")
  }
  render(){
    console.log("Parent Render")
    return(
      <>
      <h1>about</h1>
      <div>
        LoggedInUser
        <UserContext.Consumer>
          {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>
  }
        </UserContext.Consumer>
      </div>
      <h2>This is Namaste React web series</h2>
    <UserClass name={"Akshay Saini (class) "} location={"jalandhar"}/>
    <UserClass name={"Elon Musk (class) "} location={"america"}/>
    </>
    )
  }
}
export default About;


// const About = () => {
//   return (
//     <>
//       <h1>about</h1>
//       <h2>This is Namaste React web series</h2>
//     <UserClass name={"Akshay Saini (class) "} location={"jalandhar"}/>
//     </>
//   )
// }

// export default About
