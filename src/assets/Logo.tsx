import React from "react";

function Logo({ ...props }) {
  return (
    <svg
      id="logo"
      data-name="logo"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 400 200"
    >
      <path
        fill="#542ea6"
        className="w-full"
        {...props}
        d="M77.54,121.83c4.58-3.86,8.05-8.44,10.39-13.76,2.37-5.36,3.57-11,3.57-16.94,0-7.79-1.69-14.61-5.06-20.48-3.41-5.88-8.08-10.48-14.12-13.76-6.04-3.31-12.98-4.97-20.91-4.97s-14.9,1.66-20.91,5c-6.04,3.34-10.74,7.95-14.12,13.83-3.38,5.91-5.06,12.69-5.06,20.39s1.69,14.38,5.06,20.26c3.38,5.88,8.08,10.49,14.12,13.83,6.01,3.34,12.95,5,20.78,5,.75,0,1.53-.06,2.4-.19l27.56,18.08,16.69-12.98-20.39-13.28ZM70.56,109.24h-19.48v-19.48h-19.48v-19.48h19.48v19.48h19.48v19.48ZM99.76,128.47v-54.57h22.65v13.61c1.45-4.94,3.72-8.57,6.81-10.89,3.08-2.32,6.77-3.49,11.05-3.49l2.72,19.28c-1.74-.22-3.45-.32-5.12-.32-10.09,0-15.14,4.14-15.14,12.41v23.96h-22.98ZM148.99,128.47V53.54h51.62v16.55h-28.21v15.14h26.14v14.6h-26.14v28.64h-23.42ZM230.67,129.34c-5.01,0-9.55-1.22-13.61-3.65-4.07-2.43-7.28-5.79-9.64-10.07-2.36-4.28-3.54-9.18-3.54-14.7s1.18-10.34,3.54-14.48c2.36-4.14,5.57-7.39,9.64-9.75,4.06-2.36,8.61-3.54,13.61-3.54,3.56,0,7.01.98,10.35,2.94,3.34,1.96,5.92,5.19,7.73,9.69v-11.87h22.65v54.57h-22.87v-10.13c-1.75,3.56-4.07,6.28-6.97,8.17-2.91,1.89-6.54,2.83-10.89,2.83ZM237.75,112.14c2.97,0,5.51-1.07,7.62-3.21,2.11-2.14,3.16-4.78,3.16-7.9s-1.05-5.68-3.16-7.68c-2.11-1.99-4.65-3-7.62-3-3.12,0-5.74,1.05-7.84,3.16s-3.16,4.68-3.16,7.73,1.05,5.63,3.16,7.73,4.72,3.16,7.84,3.16ZM299.83,129.34c-3.27,0-6.57-.33-9.91-.98-3.34-.65-6.35-1.56-9.04-2.72l3.16-13.72c1.67.87,3.96,1.62,6.86,2.23,2.9.62,5.48.93,7.73.93,3.63,0,5.45-.98,5.45-2.94,0-.94-.56-1.64-1.69-2.07-1.13-.44-2.58-.82-4.36-1.14-1.78-.33-3.69-.76-5.72-1.31-2.03-.55-3.94-1.38-5.72-2.51-1.78-1.12-3.24-2.74-4.36-4.84-1.13-2.11-1.69-4.87-1.69-8.28,0-5.73,2.26-10.31,6.81-13.72,4.53-3.41,10.76-5.12,18.67-5.12,3.05,0,5.9.22,8.55.66,2.65.43,5.17,1.34,7.57,2.72l-2.29,13.29c-3.85-1.6-7.88-2.4-12.09-2.4-2.69,0-4.63.22-5.83.65-1.2.44-1.8,1.17-1.8,2.18,0,.8.58,1.41,1.74,1.85,1.16.43,2.67.85,4.52,1.25,1.85.4,3.79.94,5.83,1.64s3.98,1.65,5.83,2.88c1.85,1.24,3.36,2.88,4.52,4.95s1.74,4.74,1.74,8.01c0,5.81-2.14,10.34-6.43,13.61-4.29,3.27-10.31,4.9-18.08,4.9ZM355.26,129.34c-5.15,0-9.35-.87-12.58-2.61-3.24-1.74-5.57-4.1-7.03-7.08-1.45-2.97-2.18-6.32-2.18-10.02v-22.22h-8.55v-13.51h10.18l4.71-19.47h9.9v19.47h19.37v13.51h-12.63v19.06c0,1.67.55,2.96,1.64,3.86s2.5,1.36,4.25,1.36,3.48-.43,5.22-1.31l1.64,15.14c-1.74,1.24-3.96,2.18-6.64,2.83-2.69.66-5.12.98-7.3.98ZM191.96,147.95h-19.48v-19.48h19.48v19.48ZM388.68,73.91h-19.48v-19.48h19.48v19.48Z"
      />
    </svg>
  );
}

export default Logo;
