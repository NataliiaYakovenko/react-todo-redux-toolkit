import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsersThunk } from "../../../store/slices/usersSlice";
import styles from "./Users.module.scss";


const Users = ({ users, isFetching, error, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!ERROR!!! {error.message}</div>}
      {!isFetching && !error && users.results && (
        <div className={styles.usersWrapper}>

          <div className={styles.usersCards}>
            {users.results.map((u, i) => {
              return (
                <div className={styles.usersContainer} key={i}>
                  <img
                    className={styles.usersImage}
                    src={u.picture.thumbnail}
                    alt={`${u.name.first} ${u.name.last}`}
                  />
                  <p className={styles.userName}>
                    {u.name.first} {u.name.last}
                  </p>
                  <p>Comments...</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
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
