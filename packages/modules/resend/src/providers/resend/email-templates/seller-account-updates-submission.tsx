interface EmailTemplateProps {
  data: {
		user_name: string,
	}
}

export const SellerAccountSubmissionEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
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
      <h1 style={{ fontSize: '2rem', marginBottom: 8, color: '#4D0000', fontWeight: 700 }}>Your application is under review</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 16, lineHeight: 1.6 }}>
        Hi {data.user_name},
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 16, lineHeight: 1.6 }}>
        Thank you for your interest in selling on Checkatrade Shop.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 16, lineHeight: 1.6 }}>
        Your application is currently being reviewed by our team. You can expect a response within 3-5 working days.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 24, lineHeight: 1.6 }}>
        If you have any questions, please email shop@checkatrade.com.
      </p>
      <div style={{ marginTop: 32, color: '#040154' }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  )
}
