import { Flex, Input } from "antd";
import "./App.css";
import { SettingOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import React, { useState } from "react";

function Final() {
  return (
    <div>
      <SignUpForm />
      <Select1 />
      <Select2 />
    </div>
  );
}
const TableToForm = () => {
  const [selectedRowData, setSelectedRowData] = useState({
    name: "",
    age: "",
    email: "",
  });
  const handleRowClick = (row) => {
    setSelectedRowData(row);
  };
};

const items = [
  {
    key: "sub1",
    label: "Select Role",
    icon: <MailOutlined />,
    children: [
      {
        key: "5",
        label: "Admin",
      },
      {
        key: "6",
        label: "Service",
      },
    ],
  },
];
const Item2 = [
  {
    key: "sub2",
    label: "Select User(Cab be null)",
    icon: <MailOutlined />,
    children: [
      {
        key: "7",
        label: "",
      },
      {
        key: "8",
        label: "",
      },
    ],
  },
];
const Select1 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(collapsed);
  };
  return (
    <div
      className="Select1"
      style={{
        width: 290,
      }}
    >
      <h4 className="role">User Role</h4>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="horizontal"
        theme="light"
        horizontalCollapsed={collapsed}
        toggleCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
const Select2 = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      className="Select2"
      style={{
        width: 290,
      }}
    >
      <h4>Reports To</h4>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub2"]}
        mode="inline"
        theme="light"
        onHideCollapsed={collapsed}
        items={Item2}
      />
    </div>
  );
};

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <div className="fName">
        <label htmlFor="firstName">Name</label>
        <Input
          vertical
          gap={12}
          placeholder=""
          variant="filled"
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          required
        />
      </div>
      <div className="lName">
        <label htmlFor="lastName">Username</label>
        <Input
          placeholder=""
          variant="filled"
          type="text"
          id="lastName"
          name="lirstName"
          value={formData.lastName}
          onChange={handleChange}
          required
        ></Input>
      </div>

      <label htmlFor="email">Email</label>
      <Input
        className="email"
        placeholder=""
        variant="filled"
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <div className="btns">
        <Flex gap="small" wrap>
          <Button type="primary" id="btn1">
            Disable User
          </Button>
          <Button type="primary" id="btn2">
            {" "}
            Set Password
          </Button>
        </Flex>
      </div>
    </form>
  );
};
export default Final;
