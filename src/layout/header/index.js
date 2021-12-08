import { SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Input, Row, Col, Menu, Button } from "antd";
import { NavLink, Link } from "react-router-dom";
import {
  LOGIN_ROUTE,
  HOME_ROUTE,
  DETAILS_ROUTE,
  ABOUTUS_ROUTE,
} from "routes/constants";
import Style from "./style";
const { SubMenu } = Menu;
const sun = [
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.995 12C6.995 14.761 9.241 17.007 12.002 17.007C14.763 17.007 17.009 14.761 17.009 12C17.009 9.239 14.763 6.993 12.002 6.993C9.241 6.993 6.995 9.239 6.995 12ZM11 19H13V22H11V19ZM11 2H13V5H11V2ZM2 11H5V13H2V11ZM19 11H22V13H19V11Z" />
    <path d="M5.63702 19.778L4.22302 18.364L6.34402 16.243L7.75802 17.657L5.63702 19.778Z" />
    <path d="M16.242 6.34405L18.364 4.22205L19.778 5.63605L17.656 7.75805L16.242 6.34405Z" />
    <path d="M6.34402 7.75902L4.22302 5.63702L5.63802 4.22302L7.75802 6.34502L6.34402 7.75902Z" />
    <path d="M19.778 18.3639L18.364 19.7779L16.242 17.6559L17.656 16.2419L19.778 18.3639Z" />
  </svg>,
];
const moon = [
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 11.807C10.7418 10.5483 9.88488 8.94484 9.53762 7.1993C9.19037 5.45375 9.36832 3.64444 10.049 2C8.10826 2.38205 6.3256 3.33431 4.92899 4.735C1.02399 8.64 1.02399 14.972 4.92899 18.877C8.83499 22.783 15.166 22.782 19.072 18.877C20.4723 17.4805 21.4245 15.6983 21.807 13.758C20.1625 14.4385 18.3533 14.6164 16.6077 14.2692C14.8622 13.9219 13.2588 13.0651 12 11.807V11.807Z" />
  </svg>,
];

const profile = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
    ></path>
  </svg>,
];
const logo = [
  <svg
    width="48"
    height="40"
    viewBox="0 0 36 28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 22H7V11H0V4h14v18zM28 22h-8l7.5-18h8L28 22z"
      fill="#111827"
    ></path>
    <circle cx="20" cy="8" r="4" fill="currentColor"></circle>
  </svg>,
];
export const Header = () => {
  return (
    <Style>
      <Row gutter={[24, 0]}>
        <Col span={24} md={4} className="header-logo">
          <Button type="link">{logo}</Button>
        </Col>
        <Col span={24} md={12}>
          <Menu mode="horizontal" style={{ border: " none" }}>
            <Menu.Item>
              <Link to={ABOUTUS_ROUTE} className="header-menu"></Link>
              About
            </Menu.Item>
            <Menu.Item>
              <Link to={HOME_ROUTE} className="header-menu"></Link>
              Home
            </Menu.Item>
            <Menu.Item>
              <Link to={DETAILS_ROUTE} className="header-menu"></Link>
              News
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={24} md={4}>
          <Input
            className="header-search"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={24} md={4} className="header-control">
          <Menu mode="horizontal" style={{ border: " none" }}>
            <Menu.Item icon={profile}>
              <Link
                to={LOGIN_ROUTE}
                mode="horizontal"
                className="header-menu"
              ></Link>
              Sign in
            </Menu.Item>
            <Menu.Item>{moon}</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Style>
  );
};
export default Header;
