import { DOMAIN } from "@/lib/constants";
import axios from "axios";

const AdminPage = async () => {
  try {
    const { data } = await axios.get(`${DOMAIN}/api/test`);
    console.log(data);
  } catch (error) {
    console.log("failed", error);
  }
  return (
    <div>
      <div>Kino qo'shish</div>
      
    </div>
  );
};

export default AdminPage;
