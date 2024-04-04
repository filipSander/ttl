import {
	QueryCache,
	QueryClient,
	QueryClientProvider
} from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

export const QueriesClient = ({ children }: { children: ReactNode }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				queryCache: new QueryCache({
					onError: async error => {
						console.log(error)
						toast.error((error as any).response?.data.message || error.message)
					}
				}),
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false
					}
				}
			})
	)
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
export default QueriesClient
