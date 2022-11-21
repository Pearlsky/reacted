import { shortISO } from "./date-wrangler";

export function getData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not fetch data`);
            }

            return response.json();
        });
}

export function getBookings(bookableId, startDate, endDate) {
    const start = shortISO(startDate);
    const end = shortISO(endDate);

    const urlRoot = "http://localhost:3001/bookings";
    const query = `bookableId=${bookableId}&date_gte=${start}&date_lte=${end}`

    return getData(`${urlRoot}?${query}`);
}