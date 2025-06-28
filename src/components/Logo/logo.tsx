import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"} title="Página inicial">
      <Image src={"/svg/logo.svg"} alt="Logo do Blog" width={116} height={32} />
    </Link>
  );
};
