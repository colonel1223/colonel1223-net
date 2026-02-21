import dynamic from "next/dynamic";

const ChimeraModel = dynamic(() => import("../../components/ChimeraModel"), {
  ssr: false,
  loading: () => (
    <div style={{ background: "#080808", minHeight: "100vh", display: "flex", 
                  alignItems: "center", justifyContent: "center", 
                  color: "#ff0040", fontFamily: "monospace", letterSpacing: "4px" }}>
      INITIALIZING CHIMERA...
    </div>
  ),
});

export default function ChimeraPage() {
  return <ChimeraModel />;
}
