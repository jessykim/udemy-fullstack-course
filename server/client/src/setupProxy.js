import { createProxyMiddleware } from "http-proxy-middleware";

export default function setupProxy (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5050",
    })
  );
};