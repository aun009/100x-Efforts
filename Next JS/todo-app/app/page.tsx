import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col text-lg w-screen h-screen flex items-center justify-center">
        {/* Notes App
        <br />
        <Link className="text-md mt-5 " href="/signup">Sign Up</Link>
        <Link className="text-md mt-1" href="/signin">Sign In</Link> */}

        {Date.now()}
      </div>
  );
}
