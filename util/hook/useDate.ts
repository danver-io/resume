import {format} from "date-fns";
import {useRouter} from "next/router";
import {ko} from "date-fns/locale/ko";
import {enUS} from "date-fns/locale/en-US";

const useDate = () => {
    const router = useRouter()

    const displayDateFromText = (dateText: string, dateFormat: string) => {
        if (!dateText) return ''

        return format(Date.parse(dateText), dateFormat, {locale: router.locale == 'ko' ? ko : enUS})
    }

    return {displayDateFromText}
}

export default useDate
