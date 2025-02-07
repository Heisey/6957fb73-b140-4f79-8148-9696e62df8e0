
import * as Query from '@tanstack/react-query'

import * as Api from 'api'
import * as Core from 'core'

export const useGetAll = (args: boolean) => Query.useQuery({
  queryKey: ['phone_list'],
  queryFn: () => Api.phoneData.getAll(),
  enabled: args
})

export const useGetById = (args?: string) => Query.useQuery({
  queryKey: ['phone_call', args],
  queryFn: () => Api.phoneData.getById(args!),
  enabled: !!args
}) 

export const useGetArchived = (args: boolean) => Query.useQuery({
  queryKey: ['phone_archived'],
  queryFn: Api.phoneData.getArchived,
  enabled: args
})

export const useUpdateCall = () => {
  return Query.useMutation({
    mutationFn: Api.phoneData.updateCall
  })
}