interface EmailTemplateProps {
  data: {
    url: string
  }
}

export const NewSellerInviteEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
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
      <h1 style={{ fontSize: '2rem', marginBottom: '8px', color: '#4D0000', fontWeight: 700 }}>
        You are invited to sell on Checkatrade Shop
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '16px', lineHeight: 1.6 }}>
        Please accept the invitation to join the platform.
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
          Accept Invitation
        </a>
        <div style={{ fontSize: 13, color: '#040154', marginTop: 8, opacity: 0.7 }}>
          If you can't click the button, here's your link: <br />
          <span style={{ color: '#606FFF' }}>{`${data.url}`}</span>
        </div>
      </div>
      <div style={{ fontSize: 13, color: '#040154', marginBottom: 24, opacity: 0.8 }}>
        If you have any questions, please email shop@checkatrade.com.
      </div>
      <div style={{ marginTop: 32, color: '#040154' }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop</div>
      </div>
    </div>
  )
}