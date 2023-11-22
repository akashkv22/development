import Table from "./Table"
import "./RightBottom.css"

export default function RightBottom() {
    return(
        <>
        <div className="right-bottom-div">
            <h4>
              Project Planning{" "}
              <object
                height="13px"
                width="11px"
                data="../src/assets/19382592661579697366.svg"
                type="image/svg+xml"
              ></object>
            </h4>
            <div className="table-div">
              <Table />
            </div>
          </div>
        </>
    )
}