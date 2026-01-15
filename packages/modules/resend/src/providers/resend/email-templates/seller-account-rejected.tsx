interface EmailTemplateProps {
  data: {
    store_name: string
    storefront_url: string
  }
}

export const SellerAccountRejectedEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
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
        Your seller application has not been approved
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 16, lineHeight: 1.6 }}>
        Thank you for your interest in selling on Checkatrade Shop.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 16, lineHeight: 1.6 }}>
        After reviewing your application, we have determined that it does not meet our current requirements for the platform.
      </p>
      <div style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
        You received this email because you applied as a seller on the {data.store_name} marketplace.<br />
        If you have any questions, please contact our support team.
      </div>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>The {data.store_name} Team</div>
        <div style={{ color: '#888', marginTop: 4 }}>{data.storefront_url}</div>
      </div>
    </div>
  )
}