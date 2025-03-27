import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Atlas Platform Documentation">
      <main style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        fontSize: '2rem',
        fontWeight: 'bold',
      }}>
        Atlas Platform Documentation
      </main>
    </Layout>
  );
}
