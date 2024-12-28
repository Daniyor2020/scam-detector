
interface HeaderProps {
  data: string[]
}
const ElementsOfPotentialScam = ({ data }: HeaderProps) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "0 auto",
        color: "#4A4A4A",
        width: "100%",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px", fontWeight: "600" }}>
        Elements of Potential Scam
      </h1>
      <ol
        style={{
          paddingLeft: "40px",
          fontSize: "16px",
          lineHeight: "1.8",
          listStyle: "decimal",
        }}
      >
        {data.map((item: string, index: number) => (
          <li key={index} style={{ marginBottom: "15px" }}>
            {/* <strong style={{ fontWeight: 'bold', color: '#2E2E2E' }}> {item.title}</strong> */}
            <p style={{ marginTop: "5px", fontSize: "14px", color: "#5A5A5A" }}>
              {item}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ElementsOfPotentialScam;
