import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Paramètres</h1>

      <Button>
        <Link href="/dashboard/settings/account">Info. perso.</Link>
      </Button>
    </div>
  );
};

export default page;
