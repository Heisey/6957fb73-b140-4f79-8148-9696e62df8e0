
import * as Core from 'core'
import * as Utils from 'utilities'

export const getAll = async () => (await Utils.server.phoneDataRequest.get<Core.I.Call[]>('/activities')).data

export const getById = async (args: string) => (await Utils.server.phoneDataRequest.get<Core.I.Call>(`/activities/${args}`)).data