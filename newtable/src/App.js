import React, { useState, useEffect } from "react";
import { Table, Form, Input, Button, message } from "antd";
import axios from "axios";
const { Item: FormItem } = Form;

const MyComponent = () => {
  const [form] = Form.useForm();
  const [dataa, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);

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
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Username", dataIndex: "username", key: "username" },
    { title: "Email", dataIndex: "email", key: "email" },
  ];

  const onRowClick = (record) => {
    setSelectedRow(record);
    form.setFieldsValue(record); // Set form values based on selected row data
  };

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataa}
        onRow={(record) => ({
          onClick: () => onRowClick(record),
        })}
        rowClassName={(record) =>
          record.key === selectedRow?.key ? "selected-row" : ""
        }
      />

      <Form
        form={form}
        onFinish={onFinish}
        layout="horizontal"
        style={{ marginTop: 20 }}
      >
        <FormItem name="name" label="Name">
          <Input />
        </FormItem>
        <FormItem name="username" label="Username">
          <Input />
        </FormItem>
        <FormItem name="email" label="Email">
          <Input />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default MyComponent;
