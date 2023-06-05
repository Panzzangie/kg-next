import { Encounter } from "./encounter"

export interface Dungeon {
    title: string
    icon: string // svg/img source
    location: string
    encounters: Encounter[]
}