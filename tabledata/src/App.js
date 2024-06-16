import { Table } from "antd";
import "./App.css";
import React from "react";
import { Flex, Input } from "antd";

function App() {
  const data = [
    {
      fname: "Nicholas",
      lname: "Karlsen",
      role: "Admin",
      active: "Yes",
      key: "1",
    },
    {
      fname: "Anil",
      lname: "Dhawade",
      role: "Admin",
      active: "Yes",
      key: "2",
    },
    {
      fname: "Nithin",
      lname: "Racchabathuni",
      role: "Service Advisor",
      active: "Yes",
      key: "3",
    },
    {
      fname: "Double click",
      lname: "to create",
      role: "new user",
    },
  ];
  const columns = [
    {
      title: " First Name",
      dataIndex: "fname",
      key: "key",
    },
    {
      title: "Last Name",
      dataIndex: "lname",
      key: "key",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "key",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "key",
    },
  ];

  return (
    <div className="App">
      <div className="header">
        <h2>Users</h2>
        <h5>User Name</h5>
      </div>

      <header className="App-header">
        <Table className="table" dataSource={data} columns={columns}></Table>
      </header>
    </div>
  );
}

export default App;
