import React from 'react';
import { Form, Input, Button, Typography, Space, Layout, Row, Col } from 'antd';
import { 
  FacebookFilled, 
  TwitterSquareFilled, 
  LinkedinFilled, 
  GoogleCircleFilled 
} from '@ant-design/icons';

const { Title, Text, Link } = Typography;
const { Footer } = Layout;

// --- 1. Component Đăng nhập (LoginForm) ---
const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Thông tin đăng nhập:', values);
    // Logic xử lý đăng nhập
  };

  const socialIconStyle = {
    fontSize: '24px', 
    margin: '0 8px', 
    cursor: 'pointer',
  };

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: '50px auto', border: '1px solid #f0f0f0', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)' }}>
      
      <Title level={5}>Sign in with</Title>
      
      {/* Các icon Đăng nhập mạng xã hội */}
      <Space size="middle" style={{ marginBottom: '24px' }}>
        <FacebookFilled style={{ ...socialIconStyle, color: '#1877f2' }} />
        <TwitterSquareFilled style={{ ...socialIconStyle, color: '#1da1f2' }} />
        <LinkedinFilled style={{ ...socialIconStyle, color: '#0a66c2' }} />
      </Space>

      <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>Or</Text>

      {/* Form Đăng nhập chính */}
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Email address"
          name="email"
          rules={[
            { required: true, message: 'Vui lòng nhập địa chỉ email của bạn!' },
            { type: 'email', message: 'Địa chỉ email không hợp lệ!' },
          ]}
        >
          <Input placeholder="Enter a valid email address" size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
        >
          <Input.Password placeholder="Enter password" size="large" />
        </Form.Item>

        {/* Nút Đăng nhập */}
        <Form.Item style={{ marginTop: '24px', marginBottom: '16px' }}>
          <Button type="primary" htmlType="submit" size="large" block>
            Login
          </Button>
        </Form.Item>
      </Form>

      {/* Link Đăng ký */}
      <div style={{ textAlign: 'left' }}>
        <Text>Don't have an account? </Text>
        <Link href="/register" style={{ color: 'red' }}>Register</Link>
      </div>
    </div>
  );
};

const AppFooter = () => {
  const footerStyle = {
    backgroundColor: '#007bff', 
    color: 'white',
    padding: '16px 50px',
    textAlign: 'center',
    width: '100%',
    marginTop: 'auto', 
  };

  const iconStyle = {
    fontSize: '18px',
    color: 'white',
    cursor: 'pointer',
    marginLeft: '15px',
  };

  return (
    <Footer style={footerStyle}>
      <Row justify="space-between" align="middle" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Cột Bản quyền */}
        <Col>
          <Text style={{ color: 'white' }}>
            Copyright © 2025. All rights reserved.
          </Text>
        </Col>

        {/* Cột Mạng xã hội */}
        <Col>
          <Space>
            <FacebookFilled style={iconStyle} />
            <TwitterSquareFilled style={iconStyle} />
            <GoogleCircleFilled style={iconStyle} />
            <LinkedinFilled style={iconStyle} />
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Nội dung chính */}
      <div style={{ flexGrow: 1 }}>
        <LoginForm /> 
      </div>
      
      {/* Footer */}
      <AppFooter />
      
    </div>
  );
};

export default App;