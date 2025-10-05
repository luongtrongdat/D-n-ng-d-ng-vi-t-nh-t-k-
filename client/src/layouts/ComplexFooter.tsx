import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { TwitterOutlined, FacebookOutlined, InstagramOutlined, GithubOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

// --- Dữ liệu giả lập cho các cột liên kết ---
const companyLinks = [
  { href: '#', text: 'About' },
  { href: '#', text: 'Features' },
  { href: '#', text: 'Works' },
  { href: '#', text: 'Career' },
];

const helpLinks = [
  { href: '#', text: 'Customer Support' },
  { href: '#', text: 'Delivery Details' },
  { href: '#', text: 'Terms & Conditions' },
  { href: '#', text: 'Privacy Policy' },
];

const resourceLinks = [
  { href: '#', text: 'Free eBooks' },
  { href: '#', text: 'Development Tutorial' },
  { href: '#', text: 'How to - Blog' },
  { href: '#', text: 'YoutubePlaylist' },
];

// Component để render một cột liên kết
interface LinkColumnProps {
  title: string;
  links: { href: string; text: string }[];
}

const LinkColumn: React.FC<LinkColumnProps> = ({ title, links }) => (
  <Space direction="vertical" size={10} style={{ textAlign: 'left' }}>
    <Text strong style={{ marginBottom: 5, color: '#333' }}>
      {title}
    </Text>
    {links.map((link, index) => (
      <Link key={index} href={link.href} style={{ color: '#555', fontSize: '14px' }}>
        {link.text}
      </Link>
    ))}
  </Space>
);

// --- Component Footer chính ---
const ComplexFooter: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '60px 50px 30px',
    borderTop: '1px solid #f0f0f0',
  };

  const socialIconStyle: React.CSSProperties = {
    fontSize: '18px',
    color: '#333',
    margin: '0 10px',
  };

  return (
    <Footer style={footerStyle}>
      <Row gutter={[32, 40]} justify="center" style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Cột 1: Logo và Giới thiệu */}
        <Col xs={24} sm={24} md={8} lg={6} style={{ textAlign: 'left' }}>
          <Title level={3} style={{ marginTop: 0, marginBottom: 20, color: '#333' }}>
            MY BLOG
          </Title>
          <Text strong style={{ display: 'block', marginBottom: 10, color: '#333' }}>
            About Rareblocks
          </Text>
          <Text style={{ color: '#666', fontSize: '14px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
          </Text>
        </Col>

        {/* Cột 2: Company */}
        <Col xs={12} sm={8} md={4} lg={4} style={{ textAlign: 'left' }}>
          <LinkColumn title="Company" links={companyLinks} />
        </Col>

        {/* Cột 3: Help */}
        <Col xs={12} sm={8} md={4} lg={4} style={{ textAlign: 'left' }}>
          <LinkColumn title="Help" links={helpLinks} />
        </Col>

        {/* Cột 4: Resources */}
        <Col xs={12} sm={8} md={4} lg={4} style={{ textAlign: 'left' }}>
          <LinkColumn title="Resources" links={resourceLinks} />
        </Col>

        {/* Cột Spacer để căn chỉnh cột (nếu cần) */}
        <Col xs={0} sm={0} md={4} lg={6}></Col>
      </Row>

      {/* Dải phân cách */}
      <div style={{ borderTop: '1px solid #eee', margin: '40px 0 20px' }}></div>

      {/* Hàng Mạng xã hội */}
      <Row justify="center">
        <Space size="large">
          <Link href="#"><TwitterOutlined style={socialIconStyle} /></Link>
          <Link href="#"><FacebookOutlined style={socialIconStyle} /></Link>
          <Link href="#"><InstagramOutlined style={socialIconStyle} /></Link>
          <Link href="#"><GithubOutlined style={socialIconStyle} /></Link>
        </Space>
      </Row>
    </Footer>
  );
};

export default ComplexFooter;