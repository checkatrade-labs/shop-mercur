interface EmailTemplateProps {
  data: {
    order_address: string,
    order: {
      id: string,
      display_id?: string,
      items: any[]
      item?: any
    }
  }
}

export const BuyerCancelOrderEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ data }) => {
  const { order } = data;
  const itemsArray = order.items?.flat() || [order.item].flat();

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
      <h1 style={{ fontSize: '2rem', marginBottom: 8, color: '#4D0000', fontWeight: 700 }}>Order #{order.display_id || order.id} has been cancelled</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: 24, lineHeight: 1.6 }}>
        Your order has been cancelled by the seller.
      </p>

      <h3 style={{ marginTop: 32, marginBottom: 12 }}>Order items:</h3>
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
          {itemsArray.map((item: any, idx: number) => (
            <tr key={item.id || idx} style={{ borderBottom: '1px solid #f3f3f3' }}>
              <td style={{ padding: '12px 8px', verticalAlign: 'top' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.thumbnail && (
                    <img
                      src={item.thumbnail}
                      alt={item.product_title}
                      style={{
                        width: 48,
                        height: 48,
                        objectFit: 'cover',
                        borderRadius: 6,
                        marginRight: 12,
                        border: '1px solid #eee'
                      }}
                    />
                  )}
                  <div>
                    <div style={{ fontWeight: 600 }}>{item.product_title}</div>
                    <div style={{ fontSize: 13, color: '#555' }}>
                      Variant: {item.variant_title}
                    </div>
                  </div>
                </div>
              </td>
              <td style={{ textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }}>
                {item.unit_price} {item.currency_code || "gbp"}
              </td>
              <td style={{ textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }}>
                {item.quantity}
              </td>
              <td style={{ textAlign: 'right', padding: '12px 8px', verticalAlign: 'top' }}>
                {item.unit_price * item.quantity} {item.currency_code || "gbp"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ margin: '32px 0 16px 0', fontSize: '1rem' }}>
        If you have any questions, please contact us at shop@checkatrade.com.
      </div>

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

      <div style={{ marginTop: 32, color: '#040154' }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop</div>
      </div>
    </div>
  );
};