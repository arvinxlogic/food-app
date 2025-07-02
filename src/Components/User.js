import React, { useEffect, useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {});

  return (
    <div className="user-card m-4 p-4 bg-gray-100 rounded-lg">
      <h2>Name:{props.name}</h2>
      <h3>Location:Dehradun</h3>
      <h4>Contact:@akshaymarch7</h4>
    </div>
  );
};

export default User;
