import React, { useState, useEffect, useMemo } from "react";

import { Row, Col } from "reactstrap";

import { AddSearchEvent } from "../../components/search";
import { UserComponent } from "../../components/user";
import useHistory from "../../hooks/useHistory";
import { PayloadProps } from "../../store/ducks/history";
import "../../assets/styles/searchPage.css";
import http from "../../services/http";

export interface ProfileProps {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  created_at: Date;
}

export default function SearchPage() {
  const { add, history } = useHistory();
  const [user, setUser] = useState<ProfileProps>();

  const getLast = useMemo(() => history.slice(-1)?.[0] ?? undefined, [history]);

  function handleSearch(data: PayloadProps) {
    add({ ...data, dateTime: new Date().toLocaleString() });
  }

  useEffect(() => {
    if (getLast) {
      http
        .get<ProfileProps>(`users/${getLast.value}`)
        .then(({ data }) => {
          setUser(data);
        })
        .catch((exception) => {
          throw exception;
        });
    }
  }, [getLast]);

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 4 }}>
        <div className="searchEvent">
          <h1> Git Hub Users</h1>
          <AddSearchEvent saveSearchEvent={handleSearch} />
        </div>
        <div className="user">{user && <UserComponent user={user} />}</div>
      </Col>
    </Row>
  );
}
