const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

const devApiConfig = {
  baseUrl: "http://localhost:8000",
};

const prodApiConfig = {
  baseUrl: `${process.env.API_URL || process.env.NEXT_PUBLIC_API_URL}/api`,
};

const apiConfig = isProduction ? prodApiConfig : devApiConfig;

export { apiConfig };
