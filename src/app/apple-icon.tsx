import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A5C3A 0%, #0A1F16 100%)",
          borderRadius: 36,
          border: "2px solid rgba(201, 162, 39, 0.45)",
          color: "#E8C547",
          fontSize: 72,
          fontWeight: 600,
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.02em",
        }}
      >
        G3
      </div>
    ),
    { ...size },
  );
}
