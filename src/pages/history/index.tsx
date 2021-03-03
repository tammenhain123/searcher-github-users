import React from "react";


import { HistoryComponent } from "../../components/history";
import { Table } from "reactstrap";
import {  Row, Col } from "reactstrap";

import "../../assets/styles/historyPage.css";
import useHistory from "../../hooks/useHistory";

const HistoryPage = () => {
  const { history } = useHistory();

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h1 style={{marginLeft: "27%"}}>Search History</h1>
        <Table striped>
          <thead>
            <tr>
              <th>User</th>
              <th>Searched At</th>
            </tr>
          </thead>
          <tbody>
            {history.map((data) => (
                <HistoryComponent key={data.id} searchEvent={data} />
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default HistoryPage;
