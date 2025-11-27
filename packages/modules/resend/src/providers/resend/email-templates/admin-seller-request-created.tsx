interface EmailTemplateProps {
  data: {
    request_address: string,
    seller_name: string
  }
}

export const AdminSellerRequestCreatedEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
  return (
    <div style={{
      maxWidth: 600,
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      color: '#222',
      background: '#fff',
      padding: 24,
      borderRadius: 10
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>
        New seller application
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        {data.seller_name} has requested to join Checkatrade Shop. Please review and approve the request in the admin panel.
      </p>

      <div style={{ marginBottom: 24 }}>
        <a
          href={data.request_address}
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            background: '#222',
            color: '#fff',
            borderRadius: 6,
            textDecoration: 'none',
            fontWeight: 600,
            marginBottom: 8
          }}
        >
          Review Request
        </a>
        <div style={{ fontSize: 13, color: '#555', marginTop: 8 }}>
          If you can't click the button, here's your link: <br />
          <span style={{ color: '#0070f3' }}>{data.request_address}</span>
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop</div>
      </div>
    </div>
  )
}