import { Raid } from '@/components/raid/Raid'
import { redirect } from 'next/navigation'
import * as React from 'react'

interface Props {
  params: any
}

const availableRaids: string[] = [
  'lastwish',
  'gardenofsalvation',
  'deepstonecrypt',
  'vaultofglass',
  'vowofthedisciple',
  'kingsfall',
  'rootofnightmares',
]

/**
 * This is really a wrapper to decide whether
 * there is a matching raid and
 * then we can render a page for that
 * or if we need to reroute back raids home
 * @param props
 *  props.params is provided by next and contains the url parameters
 * @returns
 */
export default function RaidContainer(props: Props) {
  const raidFound = availableRaids.indexOf(props.params.raid) > -1
  if (!raidFound) {
    redirect('/raids')
  }

  return <Raid selectedRaid={props.params.raid} />
}
