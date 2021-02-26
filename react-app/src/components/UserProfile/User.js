import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers } from "../../store/users";
import { getPets } from "../../store/pets";


function User() {
  const dispatch = useDispatch();
  const { userId }  = useParams();
  const { petId } = useParams();

  const currentUser = useSelector(state => state.session.user[userId])
  const pet = useSelector(state => state.pets)

  if

  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
  );
}
export default User;
