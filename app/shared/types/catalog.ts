export interface MediaCard {
  id: string
  name: string
  photo: string
}

export type ParameterTable = Record<string, Record<string, string>>

export interface Category extends MediaCard {
  video: string
}

export interface MachineCard extends MediaCard {}

export interface MachineDetailCard extends MediaCard {}

export type MachineTable = ParameterTable

export interface MachineFullCard {
  id: string
  name: string
  models: string[]
  applying: string
  description: string[]
  photos: string[]
  details: MachineDetailCard[]
  table: MachineTable
}

