interface EmailTemplateProps {
  data: {
		user_name: string,
		order_address: string,
		order_id: string,
		order: {
			id: string,
			display_id: string,
			trackingNumber: string,
			items: {
				name: string
			}[],
			currency_code: string,
			item_total: number,
			shipping_methods: {
				amount: number,
				name: string
			}[],
			total: number
			email: string
			shipping_address: {
				first_name: string,
				last_name: string,
				company: string,
				address_1: string,
				address_2: string,
				city: string,
				province: string,
				postal_code: string,
				phone: string
			}
		}
	}
}

export const SellerCanceledOrderEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
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
        Order #{data.order.display_id} has been cancelled
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>
        This order has been cancelled and the customer has been notified.
      </p>

	    <div style={{ marginBottom: 24 }}>
        <a
          href={data.order_address}
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
          View Order Details
        </a>
        <div style={{ fontSize: 13, color: '#555', marginTop: 8 }}>
          If you can't click the button, here's your link: <br />
          <span style={{ color: '#0070f3' }}>{data.order_address}</span>
        </div>
      </div>

      <div style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
        For platform queries, email shop@checkatrade.com.
      </div>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  )
}
