import Home from "@/components/pages/homePage/Home";
import { currentUser } from "@clerk/nextjs/server";

export default async function HomePage() {
  const user = currentUser();
  console.log(user);
  console.log("userwafdaksdfjkasdfj");
  return (
    <div>
      <Home />
    </div>
  );
}
