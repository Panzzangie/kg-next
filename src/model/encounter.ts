export enum EncounterType {
    combat,
    transition,
    entrance
}

export interface Encounter {
    title: string
    encounterType: EncounterType
    summary: EncounterSection[]
}

export interface EncounterSection {
    title?: string
    text: string
    imageSrc?: string
}

export interface CombatEncounter extends Encounter {
    challenge: EncounterSection
    triumph?: EncounterSection
    masterChanges?: EncounterSection
}

export interface EntranceEncounter extends Encounter {
    triumph?: EncounterSection
    masterChanges?: EncounterSection
    secrets?: EncounterSection[]
}

export interface TransitionEncounter extends Encounter {
    secrets?: EncounterSection[]
}

