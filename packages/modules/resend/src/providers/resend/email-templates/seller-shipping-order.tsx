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
		store_name: string
		storefront_url: string
	}
}

export const SellerOrderShippingEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
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
      <h1 style={{ fontSize: '2rem', marginBottom: 8, color: '#4D0000', fontWeight: 700 }}>Order #{data.order.display_id} marked as shipped</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24, lineHeight: 1.6 }}>
        The shipping status has been updated and the customer has been notified.
      </p>
      <div style={{ marginBottom: 24 }}>
        <p style={{ marginBottom: 4 }}>
          <strong>Delivery address:</strong><br />
          {data.order.shipping_address.first_name} {data.order.shipping_address.last_name},<br />
          {data.order.shipping_address?.company ? `${data.order.shipping_address.company}, ` : ''}
          {data.order.shipping_address.address_1}
          {data.order.shipping_address.address_2 && `, ${data.order.shipping_address.address_2}`}, {data.order.shipping_address.postal_code} {data.order.shipping_address.city}
          {data.order.shipping_address.province ? `, ${data.order.shipping_address.province}` : ''}
          <br />
          {data.order.email}, {data.order.shipping_address.phone}
        </p>
      </div>
      <div style={{ fontSize: 13, color: '#040154', marginBottom: 24, opacity: 0.8 }}>
        For platform queries, email shop@checkatrade.com.
      </div>
      <div style={{ marginTop: 32, color: '#040154' }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>The {data.store_name} Team</div>
        <div style={{ color: '#888', marginTop: 4 }}>{data.storefront_url}</div>
      </div>
    </div>
  )
}
