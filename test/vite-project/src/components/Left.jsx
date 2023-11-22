import List from "./List";
import Profile from "./Profile";
export default function Left() {
  return (
    <>
      <div className="left-div">
        <Profile />
        <List />
      </div>
    </>
  );
}
