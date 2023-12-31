import "./List.css";
export default function List() {
  return (
    <>
      <div className="list">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <p style={{ color: "#a3a2ab" }}>
              {" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="Clipboard" width="16"
                height="16"><path d="M161 160.5h192c-1.688-20-9.729-35.45-27.921-40.356-.446-.119-1.12-.424-1.567-.541-12.004-3.424-21.012-7.653-21.012-20.781V78.227C302.5 52.691 281.976 32 256.49 32c-25.466 0-45.99 20.691-45.99 46.227v20.595c0 13.128-8.592 17.169-20.597 20.593-.447.117-.8.61-1.266.729C170.446 125.05 162.927 140.5 161 160.5zm95.99-96.105c7.615 0 13.791 6.195 13.791 13.832 0 7.654-6.176 13.85-13.791 13.85-7.614 0-13.772-6.195-13.772-13.85 0-7.637 6.158-13.832 13.772-13.832z" fill="#a3a2ab" className="color000000 svgShape"></path><path d="M405.611 63.5H331.5v13.988c0 10.583 9.193 19.012 19.507 19.012h37.212c6.667 0 12.099 5.435 12.44 12.195l.085 327.1c-.322 6.432-5.303 11.546-11.514 12.017l-264.418.031c-6.211-.471-11.149-5.695-11.472-12.126l-.085-327.014c.322-6.761 5.858-12.203 12.506-12.203h37.231c10.313 0 18.507-8.429 18.507-19.012V63.5h-73.131C93.25 63.5 80.5 76.058 80.5 91.575v360.38c0 15.502 12.75 28.545 27.869 28.545h297.242c15.138 0 26.889-13.043 26.889-28.545V91.575c0-15.517-11.751-28.075-26.889-28.075z" fill="#ffffff" className="color000000 svgShape"></path><path d="M144.5 192.5h112v32h-112zM144.5 384.5h160v32h-160zM144.5 320.5h129v32h-129zM144.5 256.5h208v32h-208z" fill="#ffffff" className="color000000 svgShape"></path></svg>
              Set BOQ
            </p>
          </li>
          <li className="list-group-item">
            <p style={{ color: "#a3a2ab" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1792 1792"
                id="Calendar"
                width="15"
                height="15"
              >
                <path
                  d="m1303 964-512 512q-10 9-23 9t-23-9l-288-288q-9-10-9-23t9-22l46-46q9-9 22-9t23 9l220 220 444-444q10-9 23-9t22 9l46 46q9 9 9 22t-9 23zM128 1664h1408V640H128v1024zM512 448V160q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zm768 0V160q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v288q0 14 9 23t23 9h64q14 0 23-9t9-23zm384-64v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"
                  fill="#a3a2ab"
                  className="color000000 svgShape"
                ></path>
              </svg>
              Year planning
            </p>
          </li>
          <li className="list-group-item">
            <p style={{ color: "#a3a2ab" }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                id="Store"
                height="16px"
                width="16px"
              >
                <path fill="none" d="M0 0h48v48H0z"></path>
                <path
                  d="M40 8H8v4h32V8zm2 20v-4l-2-10H8L6 24v4h2v12h20V28h8v12h4V28h2zm-18 8H12v-8h12v8z"
                  fill="#a3a2ab"
                  className="color000000 svgShape"
                ></path>
              </svg>{" "}
              Project Configuration
            </p>
          </li>
          <li className="list-group-item">
            <p style={{ color: "#a3a2ab" }}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                enableBackground="new 0 0 100 100"
                viewBox="0 0 100 100"
                id="lightbulb"
              >
                <path
                  d="M66.16 30.904c-4.81-4.515-11.104-6.774-17.708-6.351-11.787.757-21.255 10.211-22.024 21.993-.402 6.265 1.623 12.316 5.712 17.05.605.691 1.826 2.629 3.196 7.829.353 1.35.932 2.594 1.706 3.721v6.527c0 3.97 2.481 7.365 5.971 8.735C43.335 92.982 46.338 95 50 95c3.581 0 6.529-1.93 6.959-4.422 3.732-1.242 6.434-4.76 6.434-8.904v-7.401c.519-.915.934-1.892 1.21-2.941 1.294-4.995 2.491-6.874 3.087-7.549 3.825-4.315 5.931-9.873 5.931-15.65C73.622 41.635 70.902 35.354 66.16 30.904zM59.393 81.674c0 2.971-2.417 5.388-5.388 5.388H46.43c-2.971 0-5.388-2.417-5.388-5.388v-4.955h18.351V81.674zM64.696 61.132c-1.505 1.7-2.802 4.708-3.963 9.188-.229.867-.583 1.67-1.056 2.398h-8.681V58.494c4.238-.716 7.48-4.402 7.48-8.841 0-4.949-4.026-8.976-8.976-8.976s-8.976 4.026-8.976 8.976c0 4.436 3.237 8.12 7.471 8.839v14.226h-7.775c-.456-.703-.797-1.475-1.016-2.31-1.221-4.635-2.547-7.725-4.046-9.438-3.391-3.925-5.074-8.957-4.739-14.167.638-9.78 8.5-17.631 18.287-18.259 5.488-.346 10.72 1.524 14.716 5.275 3.997 3.751 6.199 8.834 6.199 14.312C69.622 52.932 67.873 57.548 64.696 61.132zM49.5 55.629c-3.295 0-5.976-2.681-5.976-5.976s2.681-5.976 5.976-5.976 5.976 2.681 5.976 5.976S52.795 55.629 49.5 55.629zM17.51 45.941H9.059c-.994 0-1.8.806-1.8 1.8s.806 1.8 1.8 1.8h8.451c.994 0 1.8-.806 1.8-1.8S18.504 45.941 17.51 45.941zM90.941 45.941H82.49c-.994 0-1.8.806-1.8 1.8s.806 1.8 1.8 1.8h8.451c.994 0 1.8-.806 1.8-1.8S91.936 45.941 90.941 45.941zM25.753 69.443l-5.976 5.976c-.703.702-.703 1.842 0 2.545.352.352.812.527 1.273.527.46 0 .921-.176 1.273-.527l5.976-5.976c.703-.702.703-1.842 0-2.545C27.597 68.741 26.457 68.74 25.753 69.443zM72.974 26.567c.46 0 .921-.176 1.273-.527l5.976-5.976c.703-.702.703-1.842 0-2.545-.702-.702-1.842-.703-2.546 0l-5.976 5.976c-.703.702-.703 1.842 0 2.545C72.053 26.392 72.513 26.567 72.974 26.567zM48.2 6.8v8.451c0 .994.806 1.8 1.8 1.8s1.8-.806 1.8-1.8V6.8C51.8 5.806 50.994 5 50 5S48.2 5.806 48.2 6.8zM74.247 69.443c-.703-.703-1.843-.703-2.546 0-.703.703-.703 1.843 0 2.545l5.976 5.976c.352.352.813.527 1.273.527s.921-.176 1.273-.527c.703-.703.703-1.843 0-2.545L74.247 69.443zM25.753 26.04c.352.352.813.527 1.273.527s.921-.176 1.273-.527c.703-.703.703-1.843 0-2.545l-5.976-5.976c-.703-.703-1.843-.703-2.546 0-.703.703-.703 1.843 0 2.545L25.753 26.04z"
                  fill="#a3a2ab"
                  className="color000000 svgShape"
                ></path>
              </svg>
              Project Planning
            </p>
          </li>
        </ul>{" "}
      </div>
    </>
  );
}
