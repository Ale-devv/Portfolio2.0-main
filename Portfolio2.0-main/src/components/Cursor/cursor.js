import React, { useEffect, useState } from "react";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState();

  const getCusomColor = () => {
    if (theme.theme === "dark") {
      return "#fff";
    } else if (theme.theme === "light") {
      return "#fff";
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      {mount && (
        <CustomCursor
          targets={[".link"]}
          customClass="custom-cursor"
          dimensions={50}
          fill={getCusomColor()}
          smoothness={{
            movement: 1,
            scale: 0.9,
            opacity: .9,
          }}
          targetOpacity={0.5}
          targetScale={5}
        />
      )}
    </>
  );
};

export default Cursor;