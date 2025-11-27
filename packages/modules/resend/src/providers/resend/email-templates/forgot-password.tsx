interface EmailTemplateProps {
  data: {
		url: string,
	}
}

export const ForgotPasswordEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
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
      <h1 style={{ fontSize: '2rem', marginBottom: 8, color: '#4D0000', fontWeight: 700 }}>Reset your password</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24, lineHeight: 1.6 }}>
        We received a request to reset your password. Click the button below to set a new password.
      </p>
      <div style={{ marginBottom: 24 }}>
        <a
          href={`${data.url}`}
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            backgroundColor: '#FF3F3F',
            color: '#ffffff',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 600,
            marginBottom: 8,
            border: 'none'
          }}
        >
          Reset Password
        </a>
        <div style={{ fontSize: 13, color: '#040154', marginTop: 8, opacity: 0.7 }}>
          This link is valid for 24 hours only.
        </div>
      </div>
      <p style={{ fontSize: '1rem', color: '#040154', opacity: 0.7 }}>If you did not request this change, please ignore this email.</p>
      <div style={{ marginTop: 32, color: '#040154' }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop</div>
      </div>
    </div>
  )
}
