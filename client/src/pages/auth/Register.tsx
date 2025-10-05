import React from 'react';
import { Form, Input, Button, Typography, Layout, Row, Col } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Content } = Layout;

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1a202c',
  },
  leftPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative' as 'relative',
    overflow: 'hidden',
    padding: '40px',
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: '3.5rem',
    fontWeight: 600,
    lineHeight: 1.2,
    alignSelf: 'flex-start',
    maxWidth: '400px',
    zIndex: 1,
  },
  subText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1rem',
    fontWeight: 300,
    alignSelf: 'flex-start',
    marginTop: '10px',
    zIndex: 1,
  },
  rightPanel: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  formContainer: {
    backgroundColor: '#e0e0e0',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '450px',
    color: '#333333',
  },
  sphereBase: {
    position: 'absolute' as 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.7,
    pointerEvents: 'none' as 'none',
  },
  sphere1: {
    width: '250px',
    height: '250px',
    background: 'radial-gradient(circle, #9370db, #6a0dad)',
    top: '10%',
    left: '10%',
    transform: 'translate(-50%, -50%)',
  },
  sphere2: {
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, #ba55d3, #6a0dad)',
    bottom: '-150px',
    right: '-200px',
  },
};

const Register: React.FC = () => {
  const onFinish = (values: FormValues) => {
    console.log('Success:', values);
    alert('Đăng ký thành công! (Xem log trong console)');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <div style={{ ...styles.sphereBase, ...styles.sphere1 }}></div>
        <div style={{ ...styles.sphereBase, ...styles.sphere2 }}></div>
        
        <div style={{ zIndex: 1 }}>
          <Title style={styles.welcomeText} level={1}>Welcome to the website</Title>
          <Text style={styles.subText}>RIKKEI EDUCATION</Text>
        </div>
      </div>

      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <Form
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            requiredMark={false}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="firstName"
                  label={<Text style={{ fontSize: '0.85rem' }}>First name</Text>}
                  rules={[{ required: true, message: 'Vui lòng nhập First name!' }]}
                >
                  <Input prefix={<UserOutlined />} placeholder="" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="lastName"
                  label={<Text style={{ fontSize: '0.85rem' }}>Last name</Text>}
                  rules={[{ required: true, message: 'Vui lòng nhập Last name!' }]}
                >
                  <Input prefix={<UserOutlined />} placeholder="" />
                </Form.Item>
              </Col>
            </Row>

            {/* Email address */}
            <Form.Item
              name="email"
              label={<Text style={{ fontSize: '0.85rem' }}>Email address</Text>}
              rules={[{ required: true, message: 'Vui lòng nhập Email!', type: 'email' }]}
            >
              <Input prefix={<MailOutlined />} placeholder="" />
            </Form.Item>

            {/* Password */}
            <Form.Item
              name="password"
              label={<Text style={{ fontSize: '0.85rem' }}>Password</Text>}
              rules={[{ required: true, message: 'Vui lòng nhập Password!' }]}
              hasFeedback
            >
              <Input.Password prefix={<LockOutlined />} placeholder="" />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
              name="confirmPassword"
              label={<Text style={{ fontSize: '0.85rem' }}>Confirm Password</Text>}
              dependencies={['password']}
              hasFeedback
              rules={[
                { required: true, message: 'Vui lòng xác nhận Password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Hai mật khẩu đã nhập không khớp!'));
                  },
                }),
              ]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="" />
            </Form.Item>

            {/* Nút Sign Up */}
            <Form.Item style={{ marginTop: '20px' }}>
              <Button 
                type="primary" 
                htmlType="submit" 
                style={{ width: '100px', backgroundColor: '#1a73e8', borderColor: '#1a73e8' }} // Điều chỉnh style nút
              >
                Sign up
              </Button>
            </Form.Item>
            
            {/* Login Prompt */}
            <div style={{ fontSize: '0.9rem', textAlign: 'left', marginTop: '10px' }}>
              Already have an account? 
              <a 
                href="#" 
                style={{ color: '#e53e3e', textDecoration: 'none', fontWeight: 'bold', marginLeft: '5px' }}
                onClick={(e) => { e.preventDefault(); alert('Chuyển đến trang Login!'); }}
              >
                login
              </a>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;