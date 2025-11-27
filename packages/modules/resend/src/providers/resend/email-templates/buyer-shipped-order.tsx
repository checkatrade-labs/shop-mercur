interface EmailTemplateProps {
  data: {
		user_name: string,
		host: string,
		order_id: string,
		order: {
			id: string,
			display_id: string,
			trackingNumber: string,
			items: any[],
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

export const BuyerOrderShippedEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
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
      <h1 style={{ fontSize: '2rem', marginBottom: 8 }}>Your order #{data.order.display_id} has been shipped</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>
        Your order is on its way.
      </p>
      <div style={{ marginBottom: 24 }}>
        <p style={{ marginBottom: 4 }}>
          <strong>Shipping address:</strong><br />
          {data.order.shipping_address.first_name} {data.order.shipping_address.last_name},<br />
          {data.order.shipping_address?.company ? `${data.order.shipping_address.company}, ` : ''}
          {data.order.shipping_address.address_1}
          {data.order.shipping_address.address_2 && `, ${data.order.shipping_address.address_2}`}, {data.order.shipping_address.postal_code} {data.order.shipping_address.city}
          {data.order.shipping_address.province ? `, ${data.order.shipping_address.province}` : ''}
          <br />
          {data.order.email}, {data.order.shipping_address.phone}
        </p>
      </div>

      <div style={{ marginBottom: 24 }}>
        <a
          href={`${data.host}/orders/${data.order.id}`}
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
          Track Order
        </a>
        <div style={{ fontSize: 13, color: '#555', marginTop: 8 }}>
          If you can't click the button, here's your link: <br />
          <span style={{ color: '#0070f3' }}>{`${data.host}/orders/${data.order.id}`}</span>
        </div>
      </div>

      <div style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
        For questions about your order, contact the seller directly.<br />
        For anything else, email shop@checkatrade.com.
      </div>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop</div>
      </div>
    </div>
  )
}
