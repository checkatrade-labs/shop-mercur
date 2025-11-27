interface EmailTemplateProps {
  data: {
    request_type: string
    seller_name: string
  }
}

export const AdminRequestCreatedEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
  return (
    <div style={{
      maxWidth: 600,
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Helvetica Neue\', Arial, sans-serif',
      color: '#040154',
      background: '#fff',
      padding: 24,
      borderRadius: 10
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8, color: '#4D0000', fontWeight: 700 }}>
        New {data.request_type} request
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 16, lineHeight: 1.6 }}>
        {data.seller_name} has requested to create a new {data.request_type}. Please review and approve the request in the admin panel.
      </p>
      <div style={{ marginTop: 32, color: '#040154' }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop</div>
      </div>
    </div>
  )
}