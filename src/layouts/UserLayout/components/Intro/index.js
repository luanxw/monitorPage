import React from 'react';

const LoginIntro = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.title}>      监控管理系统</div>
        <p style={styles.description}>让短信监控管理更简单</p>
        <p style={styles.description}>实时发送短信，不间断监控数据走向</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  content: {
    width: '400px',
    color: '#333',
  },
  title: {
    marginBottom: '20px',
    fontWeight: '700',
    fontSize: '48px',
    lineHeight: '1.5',
  },
  description: {
    margin: '0',
    fontSize: '16px',
    color: '#333',
    letterSpacing: '0.45px',
    lineHeight: '40px',
  },
};

export default LoginIntro;
