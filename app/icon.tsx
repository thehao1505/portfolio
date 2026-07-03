import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Brand favicon: amber "H." on the HAO.SYS dark panel, amber corner accent. */
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
          background: "#04070d",
          border: "1.5px solid #1c2946",
          borderTop: "2px solid #ffb224",
          color: "#ffb224",
          fontSize: 19,
          fontWeight: 700,
          fontFamily: "monospace",
        }}
      >
        H.
      </div>
    ),
    { ...size },
  );
}
