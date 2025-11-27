export const SellerAccountRejectedEmailTemplate: React.FC = () => {
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
      <p style={{ fontSize: '1.1rem', marginBottom: 24, lineHeight: 1.6 }}>
        If you have any questions, please contact shop@checkatrade.com.
      </p>
      <div style={{ marginTop: 32, color: '#040154' }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  )
}