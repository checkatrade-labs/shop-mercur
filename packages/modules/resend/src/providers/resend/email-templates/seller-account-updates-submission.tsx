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
      fontFamily: 'Arial, sans-serif',
      color: '#222',
      background: '#fff',
      padding: 24,
      borderRadius: 10
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>Your application is under review</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        Hi {data.user_name},
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        Thank you for your interest in selling on Checkatrade Shop.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        Your application is currently being reviewed by our team. You can expect a response within 3-5 working days.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>
        If you have any questions, please email shop@checkatrade.com.
      </p>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  )
}
