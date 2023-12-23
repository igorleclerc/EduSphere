'use client'

import ButtonList from "@/components/ui/ButtonList";
import ButtonItem from "@/components/ui/ButtonList/ButtonItem";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import useSession from "@/hooks/useSession"

const handleClick = () => {
  console.log('click')
}

const page = () => {
  const {user} = useSession();
  console.log(user)
  return (
    <div className="container mx-auto py-8 space-y-8">
      <h1 className="text-xl font-bold">Compte </h1>
      <Card>
        <CardHeader>
          <CardTitle>Information personnelles</CardTitle>
          <CardDescription>Gerer</CardDescription>
        </CardHeader>
        <CardContent>
        <ButtonList>
          <ButtonItem value={user?.user_metadata.first_name} onClick={handleClick}>
            Prénom
          </ButtonItem>
          <ButtonItem value={user?.user_metadata.last_name} onClick={handleClick}>
            Nom
          </ButtonItem>
          <ButtonItem value={user?.email}>
            Mail
          </ButtonItem>
          <ButtonItem value={user?.user_metadata.INE}>
            INE
          </ButtonItem>
          <ButtonItem value="******">
            Mot de passe
          </ButtonItem>
        </ButtonList>
        </CardContent>
      </Card>
    </div>
  )
}

export default page