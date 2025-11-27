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
      fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Helvetica Neue\', Arial, sans-serif',
      color: '#040154',
      background: '#fff',
      padding: 24,
      borderRadius: 10
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: 8, color: '#4D0000', fontWeight: 700 }}>
        Order #{data.order.display_id} has been cancelled
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24, lineHeight: 1.6 }}>
        This order has been cancelled and the customer has been notified.
      </p>

	    <div style={{ marginBottom: 24 }}>
        <a
          href={data.order_address}
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
          View Order Details
        </a>
        <div style={{ fontSize: 13, color: '#040154', marginTop: 8, opacity: 0.7 }}>
          If you can't click the button, here's your link: <br />
          <span style={{ color: '#606FFF' }}>{data.order_address}</span>
        </div>
      </div>

      <div style={{ fontSize: 13, color: '#040154', marginBottom: 24, opacity: 0.8 }}>
        For platform queries, email shop@checkatrade.com.
      </div>
      <div style={{ marginTop: 32, color: '#040154' }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  )
}
