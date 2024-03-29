import React from "react";

const PasswordStrengthIndicator = ({password = ""}) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "very weak";
    } else if (passwordLength < 8) {
      return "poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();
  if (!passwordStrength) return <React.Fragment />;

  return (
    <div className="password-strength">
        strength: <span style={{fontWeight: "bold"}}>{passwordStrength}</span>
    </div>
  )
};


export default PasswordStrengthIndicator;