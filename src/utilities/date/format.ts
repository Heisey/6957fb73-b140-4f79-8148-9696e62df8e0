
import dayjs from 'dayjs'

export const format = (args: string) => dayjs(args).format('MMMM D, YYYY')