
import * as Keys from '../keys'

export type CallStatus = 
    typeof Keys.callStatus.ANSWERED
  | typeof Keys.callStatus.MISSED
  | typeof Keys.callStatus.VOICEMAIL