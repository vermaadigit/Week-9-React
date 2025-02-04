function App() {
  return (
    <div style={{ background: "#ecf0f1", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponent />
            <br />
          </div>
          <div>
            <PostComponent />
            <br />
          </div>
          <div>
            <PostComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 10,
};

function PostComponent() {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={
            "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
          }
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 5,
          }}
        />
        <div style={{ fontSize: 12, fontWeight: "lighter", marginTop: 5 }}>
          <b>100xDevs</b>
          <div style={{ color: "gray" }}>23,888 Followers</div>
          <div style={{ color: "gray" }}>12m</div>
        </div>
      </div>
      <div style={{ marginTop: 10, fontSize: 12 }}>
        Want to know how to win big? Check out how these folks won $6000 in
        bounties.
      </div>
    </div>
  );
}

export default App;
