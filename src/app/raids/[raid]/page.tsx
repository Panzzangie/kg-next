import * as React from 'react'

interface Props {
  params: any
}

// FIXME limit route param to only accept valid values
export default function Raid(props: Props) {
  return (
    <div>
      this is where an individual raid will go
      <p>current rendered raid is {props.params.raid}</p>
    </div>
  )
}
