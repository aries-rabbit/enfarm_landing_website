import * as React from "react";
import { twMerge } from "tailwind-merge";

export const LeafIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#482219"
      d="M25.676 18.884a7.613 7.613 0 0 1-3.978 1.107 8.963 8.963 0 0 1-3.42-.707A6.944 6.944 0 0 0 17 23.314V27a1 1 0 0 1-1.066 1A1.023 1.023 0 0 1 15 26.969v-1.555l-4.828-4.828A6.563 6.563 0 0 1 7.93 21a5.728 5.728 0 0 1-2.99-.834C2.216 18.511.75 14.703 1.034 9.974a1 1 0 0 1 .94-.94c4.729-.279 8.537 1.182 10.187 3.906a5.75 5.75 0 0 1 .806 3.56.499.499 0 0 1-.86.304l-2.4-2.513a1 1 0 0 0-1.414 1.414l6.735 6.906c.007-.097.016-.195.026-.291a8.57 8.57 0 0 1 2.33-4.933l6.323-6.682a1 1 0 1 0-1.413-1.415l-6.125 6.478a.5.5 0 0 1-.848-.218c-.592-2.185-.331-4.36.8-6.227 2.233-3.685 7.428-5.658 13.898-5.278a1 1 0 0 1 .94.94c.375 6.471-1.598 11.666-5.283 13.899Z"
    />
  </svg>
);
export const PhoneBuzzIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#498532"
      d="M1.4 19.25V11.9h2.1v7.35H1.4Zm3.15-3.15V8.75h2.1v7.35h-2.1Zm5.25 8.4a2.023 2.023 0 0 1-1.484-.617A2.018 2.018 0 0 1 7.7 22.4V5.6c0-.577.206-1.072.617-1.484A2.018 2.018 0 0 1 9.8 3.5h8.4c.577 0 1.072.206 1.483.617.412.412.618.906.617 1.483v16.8c0 .578-.206 1.072-.617 1.484a2.018 2.018 0 0 1-1.483.616H9.8Zm0-5.25h8.4V8.75H9.8v10.5Zm11.55 0V11.9h2.1v7.35h-2.1Zm3.15-3.15V8.75h2.1v7.35h-2.1Z"
    />
  </svg>
);
export const WormIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#498532"
      d="M14 7.438C14 5.264 15.79 3.5 18 3.5h1.6c2.062 0 3.733 1.645 3.733 3.675v11.747c0 3.08-2.537 5.578-5.666 5.578-3.13 0-5.667-2.498-5.667-5.578V15.64c0-.907-.746-1.641-1.667-1.641-.92 0-1.667.734-1.667 1.64v6.891c0 1.087-.895 1.969-2 1.969-1.104 0-2-.882-2-1.969v-6.89c0-3.08 2.538-5.579 5.667-5.579 3.13 0 5.667 2.498 5.667 5.579v3.28c0 .907.746 1.642 1.666 1.642.921 0 1.667-.735 1.667-1.641v-7.547H18c-2.209 0-4-1.764-4-3.938Zm6-.329a.97.97 0 0 0-.293-.696A1 1 0 0 0 19 6.125a1.013 1.013 0 0 0-.707.288.983.983 0 0 0-.293.696.97.97 0 0 0 .293.696 1.001 1.001 0 0 0 .707.289 1.013 1.013 0 0 0 .707-.289A.982.982 0 0 0 20 7.11Z"
    />
  </svg>
);
export const ChartIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#498532"
      fillRule="evenodd"
      d="M22.583 7.29h-4.694V5.54h7.681v7.682h-1.75V8.528l-8.848 8.848-4.861-4.861-6.188 6.187-1.237-1.237 7.425-7.425 4.861 4.862 7.61-7.611Zm3.084 17.502H2.332v-1.75h23.335v1.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export const PlantIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#498532"
      d="M22.467 16.523a6.661 6.661 0 0 1-3.482.97 7.844 7.844 0 0 1-2.992-.62 6.076 6.076 0 0 0-1.118 3.527v3.225a.873.873 0 0 1-.933.875.894.894 0 0 1-.817-.902v-1.36L8.9 18.012a5.74 5.74 0 0 1-1.962.362 5.011 5.011 0 0 1-2.617-.73C1.94 16.197.656 12.865.904 8.727a.875.875 0 0 1 .823-.822c4.138-.244 7.47 1.034 8.914 3.417.567.935.815 2.028.706 3.116a.438.438 0 0 1-.754.265l-2.1-2.198a.875.875 0 0 0-1.237 1.237l5.893 6.043c.007-.085.014-.17.023-.255a7.499 7.499 0 0 1 2.039-4.316l5.533-5.847a.875.875 0 1 0-1.237-1.238l-5.36 5.668a.44.44 0 0 1-.626.01.438.438 0 0 1-.115-.2c-.518-1.913-.29-3.816.7-5.45 1.954-3.224 6.5-4.95 12.16-4.618a.875.875 0 0 1 .823.823c.328 5.662-1.398 10.208-4.622 12.161Z"
    />
  </svg>
);
export const FaceBookIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#747474"
      d="M30 15c0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 7.487 5.485 13.693 12.656 14.818V19.336H8.848V15h3.808v-3.305c0-3.759 2.24-5.836 5.666-5.836 1.641 0 3.358.293 3.358.293v3.692h-1.892c-1.863 0-2.444 1.156-2.444 2.342V15h4.16l-.665 4.336h-3.495v10.482C24.514 28.693 30 22.487 30 15Z"
    />
  </svg>
);
export const LinkedinIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={26}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#747474"
      d="M23.914 22.074h-3.759V16.09c0-1.426-.025-3.263-1.955-3.263-1.957 0-2.257 1.555-2.257 3.16v6.087h-3.758V9.769h3.608v1.682h.05a3.985 3.985 0 0 1 1.51-1.494 3.902 3.902 0 0 1 2.05-.494c3.81 0 4.512 2.547 4.512 5.861l-.001 6.75ZM7.944 8.087c-.432 0-.854-.13-1.212-.373a2.21 2.21 0 0 1-.804-.995 2.251 2.251 0 0 1 .473-2.417 2.148 2.148 0 0 1 2.377-.481c.398.168.739.452.979.817a2.244 2.244 0 0 1-.271 2.8 2.18 2.18 0 0 1-1.542.65Zm1.879 13.987H6.06V9.77h3.763v12.305ZM25.788.104H4.172A1.835 1.835 0 0 0 2.857.64 1.897 1.897 0 0 0 2.3 1.963v22.065c.006.499.206.975.557 1.324.35.349.824.542 1.315.537h21.616a1.84 1.84 0 0 0 1.318-.535c.352-.35.554-.826.56-1.326V1.96a1.9 1.9 0 0 0-.56-1.324 1.839 1.839 0 0 0-1.318-.534"
    />
  </svg>
);
export const StatusSuccess = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#EA9A20"
      d="m12.133 16.4-2.9-2.9a1.223 1.223 0 0 0-.9-.367 1.28 1.28 0 0 0-.933.4c-.245.245-.367.556-.367.934 0 .377.122.688.367.933l3.8 3.8c.244.244.555.367.933.367s.69-.123.934-.367l7.566-7.567c.245-.244.367-.544.367-.9a1.28 1.28 0 0 0-.4-.933c-.245-.244-.556-.367-.934-.367-.377 0-.688.123-.933.367l-6.6 6.6ZM14 27.333c-1.845 0-3.578-.35-5.2-1.05a13.487 13.487 0 0 1-4.234-2.85c-1.2-1.2-2.15-2.61-2.849-4.233-.7-1.622-1.05-3.356-1.05-5.2 0-1.845.35-3.578 1.05-5.2.7-1.622 1.65-3.033 2.85-4.233 1.2-1.2 2.61-2.15 4.233-2.85 1.622-.7 3.355-1.05 5.2-1.05 1.844 0 3.578.35 5.2 1.05 1.622.7 3.033 1.65 4.233 2.85 1.2 1.2 2.15 2.61 2.85 4.233.701 1.622 1.051 3.355 1.05 5.2 0 1.844-.35 3.578-1.05 5.2a13.485 13.485 0 0 1-2.85 4.233c-1.2 1.2-2.61 2.15-4.233 2.851-1.622.7-3.356 1.05-5.2 1.05Z"
    />
  </svg>
);
export const MenuMobileWhite = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#fff"
      d="M4.667 21a1.13 1.13 0 0 1-.832-.336 1.124 1.124 0 0 1-.335-.83c0-.331.112-.608.336-.832.224-.224.5-.336.83-.335h18.667c.33 0 .608.112.832.336.224.224.336.5.335.83 0 .33-.112.608-.336.832-.224.224-.5.336-.83.335H4.666Zm0-5.833a1.13 1.13 0 0 1-.832-.336A1.124 1.124 0 0 1 3.5 14c0-.33.112-.608.336-.832.224-.224.5-.335.83-.335h18.667c.33 0 .608.112.832.336.224.224.336.501.335.831 0 .33-.112.608-.336.832-.224.224-.5.335-.83.335H4.666Zm0-5.834a1.13 1.13 0 0 1-.832-.336 1.124 1.124 0 0 1-.335-.83c0-.33.112-.608.336-.832.224-.224.5-.336.83-.335h18.667c.33 0 .608.112.832.336.224.224.336.5.335.83 0 .331-.112.608-.336.832-.224.225-.5.336-.83.335H4.666Z"
    />
  </svg>
);
export const MenuMobileBlack = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#1A1C18"
      d="M4.667 21a1.13 1.13 0 0 1-.832-.336 1.124 1.124 0 0 1-.335-.83c0-.331.112-.608.336-.832.224-.224.5-.336.83-.335h18.667c.33 0 .608.112.832.336.224.224.336.5.335.83 0 .33-.112.608-.336.832-.224.224-.5.336-.83.335H4.666Zm0-5.833a1.13 1.13 0 0 1-.832-.336A1.124 1.124 0 0 1 3.5 14c0-.33.112-.608.336-.832.224-.224.5-.335.83-.335h18.667c.33 0 .608.112.832.336.224.224.336.501.335.831 0 .33-.112.608-.336.832-.224.224-.5.335-.83.335H4.666Zm0-5.834a1.13 1.13 0 0 1-.832-.336 1.124 1.124 0 0 1-.335-.83c0-.33.112-.608.336-.832.224-.224.5-.336.83-.335h18.667c.33 0 .608.112.832.336.224.224.336.5.335.83 0 .331-.112.608-.336.832-.224.225-.5.336-.83.335H4.666Z"
    />
  </svg>
);
export const ArrowLeft = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#8D9387"
      fillRule="evenodd"
      d="M18.325 4.425a1.167 1.167 0 0 1 0 1.65L10.4 14l7.925 7.925a1.167 1.167 0 0 1-1.65 1.65l-8.75-8.75a1.167 1.167 0 0 1 0-1.65l8.75-8.75a1.167 1.167 0 0 1 1.65 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export const ArrowRight = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#8D9387"
      fillRule="evenodd"
      d="M9.675 4.425a1.167 1.167 0 0 1 1.65 0l8.75 8.75a1.167 1.167 0 0 1 0 1.65l-8.75 8.75a1.167 1.167 0 0 1-1.65-1.65L17.6 14 9.675 6.075a1.167 1.167 0 0 1 0-1.65Z"
      clipRule="evenodd"
    />
  </svg>
);
export const DownloadIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    className={twMerge("", className)}
  >
    <path
      fill="#fff"
      d="M4.167 16.667h11.666V15H4.167v1.667ZM15.833 7.5H12.5v-5h-5v5H4.167L10 13.333 15.833 7.5Z"
    />
  </svg>
);
