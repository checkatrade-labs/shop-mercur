interface EmailTemplateProps {
  data: {
    seller: {
      email: string;
      name: string;
    };
    payouts: {
      id: string;
      created_at: Date;
      amount: number;
      currency_code: string;
      order: {
        id: string;
        display_id: number;
        created_at: Date;
      };
    }[];
  };
}

export const SellerPayoutSummaryEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ data }) => {
  const { seller, payouts } = data;

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
        color: "#040154",
        backgroundColor: "#ffffff",
        padding: 24,
        borderRadius: 10,
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: 8, color: "#4D0000", fontWeight: 700 }}>
        New transfers to your account
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: 24, lineHeight: 1.6 }}>
        Hi {seller.name},<br />
        The following transfers have been made to your Stripe account.
      </p>
      <h3 style={{ marginTop: 32, marginBottom: 12 }}>Transfer list:</h3>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginBottom: 32 }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "8px",
                borderBottom: "1px solid #eee",
              }}
            >
              Order
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "8px",
                borderBottom: "1px solid #eee",
              }}
            >
              Amount
            </th>
            <th
              style={{
                textAlign: "right",
                padding: "8px",
                borderBottom: "1px solid #eee",
              }}
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {payouts.map((payout, idx) => (
            <tr key={idx} style={{ borderBottom: "1px solid #f3f3f3" }}>
              <td style={{ padding: "12px 8px", verticalAlign: "top" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ fontWeight: 600 }}>
                    Order #{payout.order.display_id}
                  </div>
                </div>
              </td>
              <td
                style={{
                  textAlign: "right",
                  padding: "12px 8px",
                  verticalAlign: "top",
                }}
              >
                {payout.amount} {payout.currency_code}
              </td>
              <td
                style={{
                  textAlign: "right",
                  padding: "12px 8px",
                  verticalAlign: "top",
                }}
              >
                {payout.order.created_at.toISOString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontSize: 13, color: "#040154", marginBottom: 24, opacity: 0.8 }}>
        For platform or payment queries, email shop@checkatrade.com.
      </div>
      <div style={{ marginTop: 32, color: "#040154" }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop Merchant Support</div>
      </div>
    </div>
  );
};
