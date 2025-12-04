
// src/global.d.ts

declare module '*.module.scss' {
  const classes: Record<string, string>;
  export default classes;
}
declare module '*.scss'; // на случай глобальных импоротов

declare module '*.svg';
declare module '*.gif';
declare module '*.png';
declare module '*.jpg';