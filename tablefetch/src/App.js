import React from "react";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import { Table, Spin, message } from "antd";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        message.error("Failed to fetch data");
        setLoading(false);
      });
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "id",
    },
    // Add more columns as needed
  ];

  console.log(data);

  return (
    <div className="tableData">
      <Spin spinning={loading}>
        <Table columns={columns} dataSource={data} rowKey="id" />
      </Spin>
    </div>
    /* {user.map((item) => {
        return (
          <div>
            <Table>{item.email}</Table>
          </div>
        );
      })} */
  );
};

export default App;
