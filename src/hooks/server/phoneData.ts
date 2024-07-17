
import * as Query from '@tanstack/react-query'

import * as Api from 'api'

export const useGetAll = () => Query.useQuery({
  queryKey: ['phone_list'],
  queryFn: Api.phoneData.getAll
})