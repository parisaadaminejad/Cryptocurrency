import { Link } from "react-router-dom";
import {
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Switch,
  message,
} from "antd";
import signinbg from "assets/images/img-signin.jpg";
import Layout from "layout/index";
import Style from "./style";
import UseTitle from "hooks/useTitle";
import { postRequest } from "api";
import { POST_API_URL } from "./constants";
import { useState } from "react";

const { Item } = Form;
export const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { Title } = Typography;
  UseTitle("login");
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  async function onFinish(formValues) {
    // try {
    //   setLoading(true);
    //   await postRequest(POST_API_URL, formValues);
    //   setLoading(false);
    // } catch (error) {
    //   setLoading(false);
    //   console.log("error", JSON.stringify(error));
    // }
  }

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
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
              form={form}
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              layout="vertical"
              className="row-col"
              initialValues={{ remember: false }}
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
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                >
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
