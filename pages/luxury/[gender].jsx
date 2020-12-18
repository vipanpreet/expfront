import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import LuxuryHeader from "../../components/LuxuryPage/luxury-header/LuxuryHeader";

const Lifestyle = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <main className="bg-luxury">
      <LuxuryHeader />
    </main>
  );
};

export default Lifestyle;
