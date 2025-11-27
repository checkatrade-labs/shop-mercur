interface EmailTemplateProps {
  data: {
		user_name: string
		link: string
	}
}

export const SellerEmailVerifyEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
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
        Verify your email address
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        Hi {data.user_name},
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        Thank you for submitting your seller account application to Checkatrade Shop.
      </p>
      <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>
        Please verify your email address to complete your registration.
      </p>
      <div style={{ marginBottom: 24 }}>
        <a
          href={data.link}
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
          Verify Email
        </a>
        <div style={{ fontSize: 13, color: '#555', marginTop: 8 }}>
          If you can't click the button, here's your link: <br />
          <span style={{ color: '#0070f3' }}>{data.link}</span>
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  )
}
