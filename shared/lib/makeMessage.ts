import { useDebounce } from '@/hooks/useDebounce'
import { toast } from 'react-toastify'

export const makeMessage = useDebounce((msg: string, warn?: boolean) => {
	if (warn) {
		toast.error(msg)
	} else {
		toast.success(msg)
	}
}, 500)
