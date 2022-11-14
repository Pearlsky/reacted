export function getData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not fetch data`);
            }

            return response.json();
        });
}