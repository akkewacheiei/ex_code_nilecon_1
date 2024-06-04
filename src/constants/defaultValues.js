

export const defaultMenuType = "menu-sub-hidden";

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = "th";
export const localeOptions = [
  { id: "th", name: "ไทย" },
  { id: "en", name: "English" },
];
export const completeVideoPlayPercentage = 0.9;
export const minimumVideoPlayPercentage = 0.75;
export const updateFrequency = 0.5;

export const searchPath = "/app/pages/search";

/* 
Color Options:
"light.purple", "light.blue", "light.green", "light.orange", "light.red", "dark.purple", "dark.blue", "dark.green", "dark.orange", "dark.red"
*/
export const isMultiColorActive = false;
export const defaultColor = "light.blue";


const dev = {
  API: {
    endpoints: [
      {
        name: "bebe",
        endpoint: process.env.REACT_APP_STAGE === 'dev'
          ? "https://api.xxx.com/xxx"
          : "http://localhost:3003",
        region: "ap-southeast-1"
      }
    ]
  }
}

const prod = {
  API: {
    endpoints: [
      {
        name: "bebe",
        endpoint: "https://api.xxx.com/xxx",
        region: "ap-southeast-1"
      }
    ]
  }
}

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : prod; // แก้เป็น prod เพื่อทดสอบจาก data challenge จริงๆ

export const awsConfig = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
