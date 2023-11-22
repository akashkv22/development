import "./Profile.css";

export default function Profile() {
  return (
    <>
      <div className="profile">
        <div>
          <div className="profile-pic"></div>
        </div>

        <p style={{ color: "white" }}>User Name</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Bars" height="16px" style={{
          position:"relative",
          left:"12px",
          bottom:"33px"
          
        }}>
          <path
            d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"
            fill="#ffffff"
            className="color000000 svgShape"
          ></path>
        </svg>
      </div>
    </>
  );
}
