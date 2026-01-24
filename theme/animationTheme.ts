// theme/animationTheme.ts
import { keyframes } from "@mui/material/styles";

export const animationTheme = {
    floatSlow: keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  `,
    floatMedium: keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  `,
    floatFast: keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-25px); }
  `,
    spinSlow: keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `,
    pingSlow: keyframes`
    0% { transform: scale(1); opacity: 1; }
    75%, 100% { transform: scale(2); opacity: 0; }
  `,
    pulse: keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  `,
};