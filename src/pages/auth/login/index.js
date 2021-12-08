import { Link } from "react-router-dom";
import { Button, Row, Col, Typography, Form, Input, Switch } from "antd";
import signinbg from "assets/images/img-signin.jpg";
import Layout from "../../../layout/index";
import Style from "./style";

const { Item } = Form;
export const Login = () => {
  const [form] = Form.useForm();
  const { Title } = Typography;

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Style>
      <Layout>
        <Row gutter={[24, 0]} justify="space-around">
          <Col
            xs={{ span: 24, offset: 0 }}
            lg={{ span: 6, offset: 2 }}
            md={{ span: 12 }}
          >
            <Title>Sign In</Title>
            <Title level={5}>Enter your email and password to sign in</Title>
            <Form
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
              className="row-col"
            >
              <Item
                className="username"
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  { type: "email", message: "The input is not valid email" },
                ]}
              >
                <Input placeholder="Email" />
              </Item>

              <Item
                className="username"
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Item>

              <Item
                name="remember"
                className="aligin-center"
                valuePropName="checked"
              >
                <Switch defaultChecked onChange={onChange} />
                Remember me
              </Item>

              <Item>
                <Button type="primary" htmlType="submit" block>
                  SIGN IN
                </Button>
              </Item>
            </Form>
          </Col>

          <Col
            className="sign-img"
            style={{ padding: 12 }}
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            md={{ span: 12 }}
          >
            {/* <img src={signinbg} alt="" /> */}
          </Col>
        </Row>
      </Layout>
    </Style>
  );
};
export default Login;
