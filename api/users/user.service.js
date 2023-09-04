const pool = require("../../config/database");
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into ${process.env.USR_TBL}(usr_name, usr_email, usr_pwd, usr_mobile) 
                values(?,?,?,?)`,
      [data.usr_name, data.usr_email, data.usr_pwd, data.usr_mobile],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  registerEvent: (data, callBack) => {
    pool.query(
      `insert into ${process.env.event_tbl}(usr_email,usr_team_name,usr_member_1,usr_member_2,usr_member_3,usr_member_4,usr_event_id,usr_event_name) 
                values(?,?,?,?,?,?,?,?)`,
      [
        data.usr_email,
        data.usr_team_name,
        data.usr_member_1,
        data.usr_member_2,
        data.usr_member_3,
        data.usr_member_4,
        data.usr_event_id,
        data.usr_event_name,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from  ${process.env.USR_TBL} where usr_email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `select * from ${process.env.USR_TBL} where usr_id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: (callBack) => {
    pool.query(
      `select usr_id,usr_name,usr_email,usr_pwd,usr_sToken,usr_mobile from ${process.env.USR_TBL}`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update ${process.env.USR_TBL} set usr_name=?, usr_email=?, usr_pwd=?, usr_mobile=? where usr_id = ?`,
      [
        data.usr_name,
        data.usr_email,
        data.usr_pwd,
        data.usr_mobile,
        data.usr_id,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `delete from ${process.env.USR_TBL} where usr_id = ?`,
      [data.usr_id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  eventRegister: (data, callBack) => {
    pool.query(
      `insert into ${process.env.EVENT_TBL}(usr_name, usr_email, usr_pwd, usr_mobile) 
                values(?,?,?,?)`,
      [data.usr_name, data.usr_email, data.usr_pwd, data.usr_mobile],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};
