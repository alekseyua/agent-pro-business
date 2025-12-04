declare module "react" {
    import React from "react";
    export = React;
}

declare module "react/jsx-runtime" {
    export * from "react";
}
