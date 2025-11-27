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
      fontFamily: 'Arial, sans-serif',
      color: '#222',
      background: '#fff',
      padding: 24,
      borderRadius: 10
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>Reset your password</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>
        We received a request to reset your password. Click the button below to set a new password.
      </p>
      <div style={{ marginBottom: 24 }}>
        <a
          href={`${data.url}`}
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
          Reset Password
        </a>
        <div style={{ fontSize: 13, color: '#555', marginTop: 8 }}>
          This link is valid for 24 hours only.
        </div>
      </div>
      <p style={{ fontSize: '1rem', color: '#555' }}>If you did not request this change, please ignore this email.</p>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop</div>
      </div>
    </div>
  )
}
