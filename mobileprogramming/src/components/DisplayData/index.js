import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class DisplayData extends Component {
  render() {
    const columns = [
      {
        Header: "Serial No.",
        accessor: "id"
      },
      {
        Header: "Name",
        accessor: "name"
      },
      {
        id: "CreatedDate",
        Header: "Created Date",
        accessor: "CreatedDate"
      },
      {
        Header: "Remove",
        accessor: "remove"
      }
    ];
    if (this.props.data.length === 0) return "";
    return (
      <ReactTable
        data={this.props.data}
        columns={columns}
        defaultPageSize={5}
        pageSizeOptions={[5, 10, 20]}
      />
    );
  }
}

export default DisplayData;
