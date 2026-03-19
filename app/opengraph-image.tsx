import { ImageResponse } from "next/og";

export const alt = "WEBNOVA social preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, #0b0f1a 0%, #12172a 100%)",
          color: "#edf0f7",
          padding: "56px 64px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 32,
            padding: "48px 52px",
            backgroundColor: "rgba(24,30,48,0.68)",
            backgroundImage:
              "radial-gradient(circle at top right, rgba(34,211,238,0.18), transparent 28%)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: "#22d3ee",
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#22d3ee",
                  fontWeight: 700,
                }}
              >
                WEBNOVA
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 80,
                lineHeight: 0.92,
                letterSpacing: "-0.06em",
                fontWeight: 800,
                maxWidth: 820,
                textTransform: "uppercase",
              }}
            >
              <span>Podigni svoju</span>
              <span>online prisutnost.</span>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 30,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8a94a8",
                fontWeight: 600,
              }}
            >
              Brzo. Jasno. Moderno.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            {[
              "Web development",
              "Webshopovi",
              "AI integracije",
              "Digitalni marketing",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "14px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(34,211,238,0.22)",
                  background: "rgba(34,211,238,0.08)",
                  color: "#edf0f7",
                  fontSize: 24,
                  fontWeight: 500,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}