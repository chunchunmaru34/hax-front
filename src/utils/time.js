export const convertFromUnixTime = (unixTimeStamp) => {
    const normalDate = new Date(unixTimeStamp * 1000);
    return normalDate;
}

export function timeDifference(date1, date2) {
    const diffMs = Math.abs(date1.getTime() - date2.getTime());
    let diffMinutes = Math.floor(diffMs / 1000 / 60);

    if (diffMinutes < 60) {
        return getStringDiff(diffMinutes, 'm');
    }

    let diffHours = Math.floor(diffMinutes / 60);

    if (diffHours < 24) {
        return getStringDiff(diffHours, 'h');
    }

    let diffDays = Math.floor(diffHours / 24);

    if (diffDays < 7) {
        return getStringDiff(diffDays, 'd');
    }

    let diffWeeks = Math.floor(diffDays / 7);

    if (diffDays < 31) {
        return getStringDiff(diffWeeks, 'w');
    }

    let diffMonths = Math.floor(diffDays / 30);

    if (diffDays < 365) {
        return getStringDiff(diffMonths, 'mm');
    }

    let diffYears = Math.floor(diffDays / 365);
    return getStringDiff(diffYears, 'y');
}

function getStringDiff(diff, mode) {
    let result;

    let unit;

    switch (mode) {
        case 'm':
            unit = 'minute';
            break;
        case 'h':
            unit = 'hour';
            break;
        case 'd':
            unit = 'day';
            break;
        case 'w':
            unit = 'week';
            break;
        case 'mm':
            unit = 'month';
            break;
        case 'y':
            unit = 'year';
            break;
        default:
            unit = 'minute';
            break;
    }

    if (diff > 1) {
        result = `${diff} ${unit}s ago`;
    } else {
        result = `${diff} ${unit} ago`;
    }

    return result;
}