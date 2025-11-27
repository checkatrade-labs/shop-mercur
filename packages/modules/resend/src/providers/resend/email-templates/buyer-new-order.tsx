interface EmailTemplateProps {
  data: {
    user_name: string,
    order_address: string,
    order_id: string,
    order: {
      display_id: string,
      items: any[],
      currency_code: string,
      shipping_methods: {
        amount: number,
        name: string
      }[],
      total: number,
      email: string,
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

export const BuyerNewOrderEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
  const { order } = data;

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
        Your Checkatrade Shop order #{order.display_id} is confirmed
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24, lineHeight: 1.6 }}>
        Hi {data.user_name},<br />
        Thanks for shopping with Checkatrade Shop.
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
          Order details
        </a>
        <div style={{ fontSize: 13, color: '#040154', marginTop: 8, opacity: 0.7 }}>
          If you can't click the button, here's your link: <br />
          <span style={{ color: '#606FFF' }}>{data.order_address}</span>
        </div>
      </div>
      <h3 style={{ marginTop: 32, marginBottom: 12 }}>Order summary:</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 32 }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #eee' }}>Product</th>
            <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }}>Amount</th>
            <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }}>Qty</th>
            <th style={{ textAlign: 'right', padding: '8px', borderBottom: '1px solid #eee' }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item: any, index: number) => (
            <tr key={index} style={{ borderBottom: '1px solid #f3f3f3' }}>
              <td style={{ padding: '12px 8px', verticalAlign: 'top' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={item.thumbnail}
                    alt={`Thumbnail of ${item.product_title}`}
                    style={{
                      width: '40px',
                      height: '40px',
                      objectFit: 'cover',
                      marginRight: '10px',
                      borderRadius: '4px',
                      border: '1px solid #eee'
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>{item.product_title}</div>
                    <div style={{ fontSize: '12px', color: '#555' }}>
                      Variant: {item.variant_title}
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }}>
                {item.unit_price} {order.currency_code}
              </td>
              <td style={{ textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }}>{item.quantity}</td>
              <td style={{ textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }}>
                {item.unit_price * item.quantity} {order.currency_code}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td><b>Delivery:</b></td>
            <td colSpan={3}>
              {order.shipping_methods[0].amount} {order.currency_code}
            </td>
          </tr>
          <tr>
            <td><b>Total:</b></td>
            <td colSpan={3}>
              {order.total} {order.currency_code}
            </td>
          </tr>
        </tfoot>
      </table>
      <div style={{ marginBottom: 24 }}>
        <div>
          <p style={{ marginBottom: 4 }}>
            <strong>Shipping address:</strong><br />
            {order.shipping_address.first_name} {order.shipping_address.last_name},<br />
            {order.shipping_address?.company ? `${order.shipping_address.company}, ` : ''}
            {order.shipping_address.address_1}
            {order.shipping_address.address_2 && `, ${order.shipping_address.address_2}`}, {order.shipping_address.postal_code} {order.shipping_address.city}
            {order.shipping_address.province ? `, ${order.shipping_address.province}` : ''}
            <br />
            {order.email}, {order.shipping_address.phone}
          </p>
        </div>
        <div>
          <p>
            <strong>Delivery method:</strong><br />
            {order.shipping_methods[0].name}
          </p>
        </div>
      </div>
      <div style={{ fontSize: 13, color: '#888', marginBottom: 24 }}>
        For questions about your order, contact the seller directly.<br />
        For anything else, email shop@checkatrade.com.
      </div>
      <div style={{ marginTop: 32, color: '#040154' }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop</div>
      </div>
    </div>
  )
}