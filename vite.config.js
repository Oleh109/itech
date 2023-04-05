import { defineConfig } from "vite";
const path = require("path");

export default defineConfig({
    resolve: {
        alias: {
            img: path.resolve(__dirname, "./img"),
            styles: path.resolve(__dirname, "./styles")
        },
    },
});