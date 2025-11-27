interface EmailTemplateProps {
  data: {
    product_title: string
  }
}

export const SellerProductApprovedEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
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
        Product approved
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 16 }}>
        Your product "{data.product_title}" has been approved and is now live on Checkatrade Shop.
      </p>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  )
}