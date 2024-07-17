
import axios from "axios"

import * as Core from 'core'

export const phoneDataRequest = axios.create({
  baseURL: Core.config.url.phoneData
})