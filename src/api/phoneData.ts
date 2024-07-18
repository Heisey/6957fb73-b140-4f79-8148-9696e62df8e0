
import * as Core from 'core'
import * as Utils from 'utilities'

export const getAll = async () => (await Utils.server.phoneDataRequest.get<Core.I.Call[]>('/activities')).data.filter(dataSet => !dataSet.is_archived)

export const getById = async (args: string) => (await Utils.server.phoneDataRequest.get<Core.I.Call>(`/activities/${args}`)).data

export const getArchived = async () => (await Utils.server.phoneDataRequest.get<Core.I.Call[]>('/activities')).data.filter(dataSet => dataSet.is_archived)