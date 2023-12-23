'use client'
import Map from './_components/MapsComp'

const page = () => {
  const accessToken = 'pk.eyJ1IjoiYW1heGltZTY3IiwiYSI6ImNscGNwYWRuNjB2dGMycHJsZzkzeXp2dWUifQ.DvvV1t93LrkbLFxH2g81Gg';
  return (
    <div>
      <Map accessToken={accessToken} />
    </div>
  )
}

export default page