interface EmailTemplateProps {
  data: {
    user_name: string
  }
}

export const SellerAccountApprovedEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
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
        Your seller account has been approved
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        Hi {data.user_name},
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        Your application has been approved and your account is now active on Checkatrade Shop.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>
        You can now start listing your products and managing orders.
      </p>
      <div style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
        If you have any questions, please email shop@checkatrade.com.
      </div>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  )
}