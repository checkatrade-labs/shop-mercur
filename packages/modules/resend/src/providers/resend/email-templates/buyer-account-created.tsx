interface EmailTemplateProps {
  data: {
    user_name: string;
  };
}

export const BuyerAccountCreatedEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ data }) => {
  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "40px auto",
        padding: "32px 24px",
        borderRadius: "12px",
        background: "#fff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        fontFamily: "Arial, sans-serif",
        color: "#222",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "16px", color: "#222" }}>
        Welcome to Checkatrade Shop, {data.user_name}
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "24px" }}>
        Your account has been created successfully.
      </p>
      <a
        href="https://shop.checkatrade.com"
        style={{
          display: "inline-block",
          padding: "12px 28px",
          background: "#222",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: 600,
          marginBottom: "32px",
        }}
      >
        Visit Checkatrade Shop
      </a>
      <div style={{ marginTop: 32 }}>
        <div>Best regards,</div>
        <div style={{ fontWeight: 600 }}>Checkatrade Shop</div>
      </div>
    </div>
  );
};
