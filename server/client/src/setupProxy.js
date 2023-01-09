/* eslint-disable import/no-anonymous-default-export */
import createProxyMiddleware from "http-proxy-middleware";

export default function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: "http://localhost:5050",
    })
  );
};