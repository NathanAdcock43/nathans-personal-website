export async function handler(event) {
    console.log("Event received:", JSON.stringify(event, null, 2)); // Debugging log

    if (!event?.Records || !Array.isArray(event.Records) || event.Records.length === 0) {
        console.error("Invalid event structure. Missing Records array.", JSON.stringify(event, null, 2));
        return {
            status: "500",
            statusDescription: "Server Error"
        };
    }

    const cfRequest = event.Records[0]?.cf?.request;

    if (!cfRequest) {
        console.error("Invalid event structure. Missing request object.", JSON.stringify(event, null, 2));
        return {
            status: "500",
            statusDescription: "Server Error"
        };
    }

    const requestUri = cfRequest.uri;

    if (typeof requestUri !== "string" || requestUri.trim() === "") {
        console.error("Invalid request URI:", requestUri);
        return {
            status: "403",
            statusDescription: "Forbidden",
            body: "Invalid Request"
        };
    }

    console.log("Processing request URI:", requestUri);

    if (requestUri === "/" || requestUri === "/index.html") {
        return {
            status: "302",
            statusDescription: "Found",
            headers: {
                location: [{
                    key: "Location",
                    value: "/newspaper/frontpage"
                }]
            }
        };
    }

    if (requestUri.endsWith("/")) {
        cfRequest.uri = requestUri + "index.html";
    }

    return cfRequest;
}
