import * as React from "react";

import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import { ProfileProps } from "../../pages/search/index"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
interface UserProps {
  user: any
}

export const UserComponent: React.FC<UserProps> = ({ user }) => {
  let createdAt = new Date(user.created_at);
  return (
    <div>
      <Card >
        <CardImg top style={{ height:"200px"}} src={user.avatar_url}/>
        <CardBody>
          <CardTitle tag="h5">Id : {user.id}</CardTitle>
          <CardTitle tag="h5">Git Hub :<a target="_blank" href={user.html_url}> {user.login} </a></CardTitle>
          <CardTitle tag="h5">Created At : {createdAt.toLocaleDateString()}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};
