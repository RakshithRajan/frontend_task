import { React } from "react";
import "../assets/css/simpleTable.css"


import { Table, Button, Popconfirm } from "antd";
import 'antd/dist/antd.css';

const SimpleTable = ({ dataSource, onDelete }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          title="Are you sure delete this user?"
          onConfirm={() => onDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="danger">Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div className="table_output">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default SimpleTable;
