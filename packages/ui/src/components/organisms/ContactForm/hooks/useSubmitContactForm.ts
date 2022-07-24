import { useLazyPostRequest } from "@hooks";

const url = `${process.env.NEXT_PUBLIC_API_URL}/contact`

const useSubmitContactForm = () => useLazyPostRequest(url)

export default useSubmitContactForm;