import React from 'react'
import Register from './pages/auth/Register'
import LoginForm from './pages/auth/Login'
import AppHeader from './layouts/Header'
import ComplexFooter from './layouts/ComplexFooter'
import { Content } from 'antd/es/layout/layout'

export default function App() {
  return (
    <div>
      <Register></Register>
      <br />
      <LoginForm></LoginForm>
      <br />
      <AppHeader></AppHeader>
      <Content style={{ padding: '24px 50px', flexGrow: 1 }}>
        {/* Đây là nơi đặt nội dung chính của trang (ví dụ: bài viết, form,...) */}
        <div style={{ backgroundColor: 'white', padding: 24, minHeight: '400px', borderRadius: '4px' }}>
          Nội dung 
        </div>
      </Content>
      <ComplexFooter></ComplexFooter>
    </div>
  )
}
