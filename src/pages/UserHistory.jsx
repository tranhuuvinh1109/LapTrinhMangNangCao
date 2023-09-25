import { Table } from "antd";
import { firstUserData } from "../const/firstUserData";

export default function UserHistory() {
  return (
    <>
      <div>
        <Table firstUserData={firstUserData} />
      </div>
    </>
  );
}
