import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { animationTheme } from "@/theme/animationTheme";
// Custom Types
export interface FloatingCodeProps extends BoxProps {
    delay?: "slow" | "medium" | "fast";
}
export interface GeometricShapeProps extends BoxProps {
    variant?: "outer" | "middle" | "inner";
}
export interface ConnectingDotProps extends BoxProps {
    delay?: string;
}
// Floating Code
export const FloatingCode = styled(Box, {
    shouldForwardProp: (prop) => prop !== "delay",
})<FloatingCodeProps>(({ delay = "slow" }) => ({
    position: "absolute",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    border: "1px solid rgba(96, 165, 250, 0.3)",
    borderRadius: "4px",
    padding: "4px 12px",
    fontSize: "0.875rem",
    fontFamily: "monospace",
    animation: `
    ${
        delay === "slow"
            ? animationTheme.floatSlow
            : delay === "medium"
                ? animationTheme.floatMedium
                : animationTheme.floatFast
    }
    ${delay === "slow" ? "4s" : delay === "medium" ? "3.5s" : "3s"}
    ease-in-out infinite
  `,
}));
// Geometric Shapes
export const GeometricShape = styled(Box, {
    shouldForwardProp: (prop) => prop !== "variant",
})<GeometricShapeProps>(({ variant = "outer" }) => ({
    position: "absolute",
    borderRadius: "50%",
    ...(variant === "outer" && {
        inset: 0,
        border: "2px solid rgba(251, 191, 36, 0.3)",
        animation: `${animationTheme.pingSlow} 3s cubic-bezier(0, 0, 0.2, 1) infinite`,
    }),
    ...(variant === "middle" && {
        inset: "16px",
        border: "2px solid rgba(96, 165, 250, 0.4)",
        animation: `${animationTheme.spinSlow} 8s linear infinite`,
    }),
    ...(variant === "inner" && {
        inset: "32px",
        background:
            "linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(96, 165, 250, 0.2))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
    }),
}));
// Connecting Dots
export const ConnectingDot = styled(Box, {
    shouldForwardProp: (prop) => prop !== "delay",
})<ConnectingDotProps>(({ delay = "0ms" }) => ({
    position: "absolute",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    animation: `${animationTheme.pulse} 2s ease-in-out infinite`,
    animationDelay: delay,
}));
