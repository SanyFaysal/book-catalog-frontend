const node_environment = process.env.NODE_ENV;

export const server_url =
    node_environment === "development"
        ? "http://localhost:8080/api/v1"
        : "https://book-catalog-backend-9jhf9gsel-sanyfaysal.vercel.app/api/v1";
