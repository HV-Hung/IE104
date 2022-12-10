import React from "react";

const UserInfo = () => {
  return (
    <div id="dashboard" className="dashboard control">
      <div className="page-title">
        <h1>Thông tin tài khoản</h1>
      </div>

      <form action="#" className="form-user">
        <div className="form-group ">
          <label id="user-name" htmlFor="user-name">
            Tên khách hàng
          </label>
          <div className="name-input">
            <input
              pattern="[A-Za-z]"
              required
              placeholder="Tên"
              id="first-name"
              type="text"
            />
            <input
              pattern="[A-Za-z]"
              required
              placeholder="Họ"
              id="last-name"
              type="text"
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="phone-number">Số điện thoại</label>
          <input
            disabled
            className="form-control"
            required
            pattern="[0-9]{10,}"
            type="text"
            name="user-phone-number"
            id="phone-number"
          />
        </div>

        <div className="form-group row">
          <label htmlFor="datapicker">
            Sinh nhật (Bạn không thể thay đổi sau khi đã lựa chọn)
          </label>
          <input required type="date" name="date-of-birth" id="datapicker" />
        </div>

        <div className="form-group row">
          <label htmlFor="email">Email</label>
          <input
            disabled
            className="form-control"
            required
            type="email"
            name="email"
            id="email"
          />
        </div>

        <div className="form-group column">
          <div className="gender">
            <input type="radio" name="male-female" id="male" />
            <label htmlFor="male">Nam</label>
          </div>

          <div className="gender">
            <input type="radio" name="male-female" id="female" />
            <label htmlFor="female">Nữ</label>
          </div>
        </div>

        <div className="btn">
          <button className="btn-submit" type="submit">
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
