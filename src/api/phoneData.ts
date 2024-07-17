
import * as Utils from 'utilities'

export const getAll = async () => (await Utils.server.phoneDataRequest.get('/activities')).data