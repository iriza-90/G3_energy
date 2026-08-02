import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
          border: "1px solid rgba(201, 162, 39, 0.45)",
          color: "#E8C547",
          fontSize: 15,
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
