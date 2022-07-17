import React from "react";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import "./index.css";

function Navbar({ count }) {
  return (
    <div className="navbar-container">
      <div className="navbar-title">
        SHOP<span>LANE</span>
      </div>
      <div className="navbar-midsection">
        <div className="navbar-midsection-home">HOME</div>
        <div className="navbar-midsection-clothing">CLOTHING</div>
        <div className="navbar-midsection-accessories">ACCESSORIES</div>
      </div>

      <div className="navbar-right">
        <div className="navbar-icon-wrapper">
          <SearchOutlined className="navbar-icon" />
        </div>
        <div className="navbar-icon-wrapper">
          <Badge
            count={count}
            className="navbar-icon bagde"
            style={{ backgroundColor: "var(--primary)" }}
          >
            <ShoppingCartOutlined className="navbar-icon" />
          </Badge>
        </div>
        <div className="navbar-icon-wrapper">
          <UserOutlined className="navbar-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
