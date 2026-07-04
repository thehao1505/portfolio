import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "HAO.SYS — Hao Nguyen The · Backend Developer";

/**
 * Social preview card, generated at build time with the HAO.SYS theme:
 * dark terminal panel, status bar, amber display type, stack line.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#04070d",
          padding: "56px 72px",
          fontFamily: "monospace",
        }}
      >
        {/* status bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #1c2946",
            paddingBottom: 24,
          }}
        >
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
            <span style={{ color: "#dce6f2" }}>HAO</span>
            <span style={{ color: "#ffb224" }}>.</span>
            <span style={{ color: "#dce6f2" }}>SYS</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#3ddc97",
              fontSize: 20,
              letterSpacing: 2,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 12,
                background: "#3ddc97",
              }}
            />
            PROD · ALL SYSTEMS NOMINAL
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#53c7f0",
              fontSize: 22,
              letterSpacing: 6,
              marginBottom: 20,
            }}
          >
            &gt; BACKEND DEVELOPER / HO CHI MINH CITY / UTC+7
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#dce6f2",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.02,
            }}
          >
            <span>BUILT FOR</span>
            <span>100 MILLION</span>
            <span style={{ color: "#ffb224" }}>USERS.</span>
          </div>
        </div>

        {/* footer line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1c2946",
            paddingTop: 24,
            color: "#7487a4",
            fontSize: 22,
          }}
        >
          <span>HAO NGUYEN THE</span>
          <span>NestJS · PostgreSQL · Redis · Elasticsearch</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
