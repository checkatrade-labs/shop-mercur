export const SellerAccountRejectedEmailTemplate: React.FC = () => {
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
        Your seller application has not been approved
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        Thank you for your interest in selling on Checkatrade Shop.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        After reviewing your application, we have determined that it does not meet our current requirements for the platform.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>
        If you have any questions, please contact shop@checkatrade.com.
      </p>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  )
}