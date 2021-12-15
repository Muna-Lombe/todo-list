import React from "react";

const Header = ({ title, totalCompleted }) => {
  return (
      <header>
          <h1 >{title}</h1>
          <p>You have completed {totalCompleted} {totalCompleted>1 ? "tasks" : "task"}!</p>
      </header>
  );
};

Header.defaultProps = { title: "Task Tracker", totalCompleted: 0 };

export default Header;
