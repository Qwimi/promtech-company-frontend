import type { MediaCard, ParameterTable } from './catalog'

export interface DetailCard extends MediaCard {}

export interface DetailFull extends MediaCard {
  models: string[]
  applying: string
  description: string[]
  photos: string[]
  table: ParameterTable
}

export interface DetailsQueryParams {
  categoryId?: string
  search?: string
  [key: string]: unknown
}

