import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const HomeSelectionSection = ({ isChangeOpen }) => {
  const [selectedGender, setSelectedGender] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (isChangeOpen) {
      setSelectedGender("");
    }
  }, [isChangeOpen]);
  const handleGender = (e, gender, type) => {
    if (selectedGender == "") {
      setSelectedGender(gender);
    } else {
      router.push({
        pathname: `/${type}/${selectedGender}`,
      });
    }
  };

  return (
    <section className="section-changestore">
      <div className="changestore-center">
        <div
          onClick={(e) => handleGender(e, "men", "lifestyle")}
          className={`changestore-head ${
            selectedGender ? "changestore-lifestyle" : "changestore-men"
          }`}
        ></div>

        <div
          onClick={(e) => handleGender(e, "women", "luxury")}
          className={`changestore-head ${
            selectedGender ? "changestore-luxury" : "changestore-women"
          }`}
        ></div>
      </div>
    </section>
  );
};

export default HomeSelectionSection;
