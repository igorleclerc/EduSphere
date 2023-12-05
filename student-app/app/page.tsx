import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between pt-2 items-center">
      <div className="">
        <Image src="/ES.png" alt="logo" width={200} height={200} />
      </div>
      <div className="">
        <div className="">

        </div>
        <div className="">
          <Link href="/auth">
            <Button>Se connecter</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
