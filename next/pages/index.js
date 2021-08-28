import Link from "next/link";
import PageWrapper from "../components/PageWrapper.jsx";

export default function Home() {
  return (
    <PageWrapper>
      <div className="home">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </PageWrapper>
  );
}
