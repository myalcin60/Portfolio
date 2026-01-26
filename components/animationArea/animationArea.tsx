'use client';

import React from "react";
import { Box } from "@mui/material";
import { FloatingCode,GeometricShape,ConnectingDot,} from "./animationArea.styles";
import {useTheme} from "@mui/material/styles";

const AnimationArea: React.FC = () => {
    const theme = useTheme();
    return (
        <Box sx={{ position: "relative", height: "256px", mt: 10, mb: 6,
            width: '100%',
            minWidth: '180px'}}>
            {/* Floating Code Lines */}
            <Box sx={{ position: "absolute", inset: 0, overflow: "hidden" }}>
                <FloatingCode
                    delay="slow"
                    sx={{ top: 0, left: 0, color:theme.palette.text.primary, mt: 3 }}  >
                    Java, PHP, JavaScript
                </FloatingCode>
                <FloatingCode
                    delay="medium"
                    sx={{
                        top: "48px",
                        right: 0,
                        color: theme.palette.text.secondary,
                        backgroundColor: "rgba(168, 85, 247, 0.1)",
                        borderColor: "rgba(192, 132, 252, 0.3)",
                    }} >
                    React, Next.js, Node.js
                </FloatingCode>
                <FloatingCode
                    delay="fast"
                    sx={{
                        bottom: 30,
                        left: 32,
                        color: theme.navbar.text,
                        backgroundColor: "rgba(34, 197, 94, 0.1)",
                        borderColor: "rgba(74, 222, 128, 0.3)",
                    }}  >
                   Cucumber, Selenium, Robot
                </FloatingCode>
                <FloatingCode
                    delay="slow"
                    sx={{
                        bottom: 0,
                        right: "48px",
                        color: theme.navbar.toggleDrawer,
                        backgroundColor: "rgba(234, 179, 8, 0.1)",
                        borderColor: "rgba(250, 204, 21, 0.3)",
                    }} >
                    Agile, Scrum, Kanban
                </FloatingCode>
            </Box>
            {/* Geometric Shapes */}
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}>
                <Box sx={{ position: "relative", width: "128px", height: "128px" }}>
                    <GeometricShape variant="outer" />
                    <GeometricShape variant="middle" />
                    <GeometricShape variant="inner">💻</GeometricShape>
                </Box>
            </Box>
            {/* Connecting Dots */}
            <ConnectingDot sx={{ top: 70, left: "64px", backgroundColor: "#fbbf24" }} />
            <ConnectingDot
                sx={{ bottom: "32px", right: 200, backgroundColor: "#60a5fa" }}
                delay="300ms"
            />
            <ConnectingDot
                sx={{ top: "50%", right: "32px", backgroundColor: "#c084fc" }}
                delay="500ms"
            />
        </Box>
    );
};
export default AnimationArea;
