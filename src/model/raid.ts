import { Encounter, EncounterSection } from "./encounter"

export interface Raid {
    title: string
    icon: string // svg/img source
    location: string
    encounters: Encounter[]
    redChest?: EncounterSection[]
    additionalSections: EncounterSection[]
}