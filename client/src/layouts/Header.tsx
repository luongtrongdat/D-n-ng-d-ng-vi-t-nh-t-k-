import React from 'react';
import { Layout, Input, Dropdown, Menu, Avatar, Space, Typography, MenuProps } from 'antd';
import { 
  SearchOutlined, 
  UserOutlined, 
  SettingOutlined 
} from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

// --- 1. Định nghĩa Menu Thả Xuống (Dropdown Menu Items) ---

// Sử dụng MenuProps['items'] để đảm bảo kiểu dữ liệu chính xác cho items
const profileMenu: MenuProps['items'] = [
  // Thông tin người dùng (Không thể click)
  {
    key: 'profile-info',
    disabled: true,
    label: (
      <Space direction="vertical" style={{ padding: '4px 0' }}>
        <Text strong>Rikkei</Text>
        <Text type="secondary" style={{ fontSize: '12px' }}>rikkei@gmail.com</Text>
      </Space>
    ),
  },
  { type: 'divider' },
  // Các mục chức năng
  { key: 'view-profile', label: 'View profile', icon: <UserOutlined /> },
  { key: 'update-picture', label: 'Update profile picture', icon: <SettingOutlined /> },
  { key: 'change-password', label: 'Change password', icon: <SettingOutlined /> },
  { type: 'divider' },
  // Đăng xuất
  { 
    key: 'logout', 
    danger: true, // Hiển thị màu đỏ cho mục này
    label: 'Log out' 
  },
];


// --- 2. Component Header Chính (AppHeader) ---
const AppHeader: React.FC = () => {
  
  // Định nghĩa style inline bằng React.CSSProperties
  const headerStyle: React.CSSProperties = {
    // Xóa padding mặc định và đặt các thuộc tính cố định
    padding: '0 50px', 
    height: 64, 
    backgroundColor: 'white',
    zIndex: 10, 
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #f0f0f0', // Đường viền mỏng phía dưới
  };

  const logoStyle: React.CSSProperties = {
    fontWeight: 'bold',
    fontSize: '18px',
    color: '#E53935', // Màu đỏ cho logo Rikkei (nếu muốn)
    marginRight: '24px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  };

  return (
    <Header style={headerStyle}>
      
      {/* Container bên trái: Logo và Thanh tìm kiếm */}
      <Space size="large" style={{ flexGrow: 1, alignItems: 'center' }}>
        
        {/* Logo */}
        <div style={logoStyle}>
          <span style={{ fontSize: '24px', marginRight: '8px' }}>⚛️</span> 
          <span>RIKKEI_EDU_BLOG</span>
        </div>

        {/* Thanh tìm kiếm */}
        <div style={{ flexGrow: 1, maxWidth: 600 }}>
          <Input 
            placeholder="Search for articles" 
            prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            style={{ borderRadius: 4 }}
            size="large"
          />
        </div>
      </Space>

      {/* Container bên phải: Avatar và Dropdown */}
      {/* Sử dụng component MenuProps đã định nghĩa */}
      <Dropdown menu={{ items: profileMenu }} trigger={['click']} placement="bottomRight" arrow>
        {/* Avatar người dùng */}
        <Avatar 
          size={40} 
          src="URL_TO_YOUR_AVATAR_IMAGE" // Thay thế bằng URL hình ảnh thật
          icon={<UserOutlined />}
          style={{ cursor: 'pointer', border: '2px solid white' }}
        />
      </Dropdown>

    </Header>
  );
};

export default AppHeader;