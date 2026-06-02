import * as React from "react";
import { cn } from "./utils";
import { balloons, textBalloons } from "balloons-js";

export interface BalloonsProps {
  type?: "default" | "text" | "both";
  text?: string;
  fontSize?: number;
  color?: string;
  className?: string;
  onLaunch?: () => void;
}

const Balloons = React.forwardRef<HTMLDivElement, BalloonsProps>(
  ({ type = "default", text, fontSize = 120, color = "#ffffff", className, onLaunch }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const launchAnimation = React.useCallback(() => {
      if (type === "default") {
        balloons();
      } else if (type === "text" && text) {
        textBalloons([
          {
            text,
            fontSize,
            color,
          },
        ]);
      } else if (type === "both" && text) {
        // Launch both regular balloons and text balloons
        balloons();
        setTimeout(() => {
          textBalloons([
            {
              text,
              fontSize,
              color,
            },
          ]);
        }, 100); // Small delay for better visual effect
      }

      if (onLaunch) {
        onLaunch();
      }
    }, [type, text, fontSize, color, onLaunch]);

    React.useImperativeHandle(ref, () => ({
      launchAnimation,
      ...(containerRef.current || {})
    } as any), [launchAnimation]);

    return <div ref={containerRef} className={cn("balloons-container", className)} />;
  }
);
Balloons.displayName = "Balloons";

export { Balloons };
