import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import dayjs from "dayjs";

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export default dayjs;
