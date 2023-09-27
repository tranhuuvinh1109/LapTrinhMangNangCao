import { firstUserData } from "../../const/firstUserData";
import TableTrained from "./components/TableTrained";

export default function TrainedModel() {
  return (
    <>
      <TableTrained userData={firstUserData} />
    </>
  );
}
