import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersThunk } from "../../../store/slices/usersSlice";

const Users = ({ users, isFetching, error, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!ERROR!!! {error.message}</div>}
      {!isFetching && !error && users.results && (
        <div>
          <h3>Review our users</h3>
          {users.results.map((u, i) => {
            return (
              <div key={i}>
                <img src={u.picture.thumbnail} />
                <p>
                  {u.name.first} {u.name.last}
                </p>
                <p>Coments...</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.users.isFetching,
  error: state.users.error,
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsersThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
