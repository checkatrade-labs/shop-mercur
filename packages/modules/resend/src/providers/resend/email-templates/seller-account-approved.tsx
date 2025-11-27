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
      fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Helvetica Neue\', Arial, sans-serif',
      color: '#040154',
      backgroundColor: '#ffffff',
      padding: 24,
      borderRadius: 10
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8, color: '#4D0000', fontWeight: 700 }}>
        Your seller account has been approved
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 16, lineHeight: 1.6 }}>
        Hi {data.user_name},
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 16, lineHeight: 1.6 }}>
        Your application has been approved and your account is now active on Checkatrade Shop.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 24, lineHeight: 1.6 }}>
        You can now start listing your products and managing orders.
      </p>
      <div style={{ fontSize: 13, color: '#040154', marginBottom: 24, opacity: 0.8 }}>
        If you have any questions, please email shop@checkatrade.com.
      </div>
      <div style={{ marginTop: 32, color: '#040154' }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  )
}