import { SliceSimulator, getSlices } from "@slicemachine/adapter-next/simulator"
import { SliceZone } from "@prismicio/react"

export default function SliceSimulatorPage({ searchParams }) {
  const slices = getSlices(searchParams.state)

  return (
    <SliceSimulator>
      <SliceZone slices={slices} components={components} />
    </SliceSimulator>
  )
}
