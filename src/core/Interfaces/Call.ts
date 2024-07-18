
import * as I from '.'

export interface Call {
  id: string
  direction: I.CallDirection
  from: number
  to: number
  via: number
  duration: number
  is_archived:  boolean
  call_types: I.CallStatus
  created_at: string
}