function App() {
  return (
    <div style={{ background: "#ecf0f1", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <PostComponent
              name={"Aditya Verma"}
              subtitle={"20 followers"}
              time={"3m ago"}
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"How to get hired in 2024? I lost my job in 2023, this is the roadmap I follwed to get a Job"} />
            <br />
          </div>
          <div>
            <PostComponent
              name={"Saurabh Kumar Sinu"}
              subtitle={"Permoted"}
              // time = {""}
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"How to get hired in 2024? I lost my job in 2023, this is the roadmap I follwed to get a Job"} />
            <br />
          </div>
          <div>
            <PostComponent
              name={"Shagufa Anjum"}
              subtitle={"Lead"}
              time={"3m ago"}
              image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
              description={"How to get hired in 2024? I lost my job in 2023, this is the roadmap I follwed to get a Job"} />
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

function PostComponent({ name, subtitle, time, image, description }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            marginRight: 5,
          }}
        />
        <div style={{ fontSize: 12, fontWeight: "lighter", marginTop: 5 }}>
          <b>{name}</b>
          <div style={{ color: "gray" }}>{subtitle}</div>
          {time !== undefined && <div style={{ display: "flex" }}>
            <div style={{ color: "gray" }}>{time}</div>
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8dcbOEsuzTTXiRLxGrajq7qFngr_Zt7a-g&s"
              }
              style={{ width: 8, height: 8, marginLeft: 5, marginTop: 4 }}
            />
          </div>}
        </div>
      </div>
      <div style={{ marginTop: 10, fontSize: 12 }}>{description}</div>
    </div>
  );
}

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>
}


export default App;
