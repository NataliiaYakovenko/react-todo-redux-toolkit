import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsersThunk } from "../../../store/slices/usersSlice";
import styles from "./Users.module.scss";

const Users = ({ users, isFetching, error, getUsers }) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    getUsers(page);
  }, [getUsers, page]);

  const prevBtnHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextBtnHandler = () => {
    setPage(page + 1);
  };

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {error && <div>!!!ERROR!!! {error.message}</div>}
      {!isFetching && !error && users.results && (
        <div className={styles.usersWrapper}>
          <button className={styles.previousPage} onClick={prevBtnHandler}>
            {"<"}
          </button>

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

                  <p className={styles.comment}>Comments...</p>
                </div>
              );
            })}
          </div>

          <button className={styles.nextPage} onClick={nextBtnHandler}>
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ users: { isFetching, error, users } }) => ({
  isFetching: isFetching,
  error: error,
  users: users,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: (page) => dispatch(getUsersThunk(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
