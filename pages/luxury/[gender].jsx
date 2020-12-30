import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import LuxuryHeader from "../../components/LuxuryPage/luxury-header/LuxuryHeader";
import LuxuryRecommendation from "../../components/LuxuryPage/luxury-recommendations/LifestyleRecommendation.components";
import Footer from "../../components/ReusableComponents/footer/Footer.components";
import LuxuryMenCollection from "../../components/LuxuryPage/Men/luxury-men-collection/LuxuryMenCollection.component";
import LuxuryMenCollectionList from "../../components/LuxuryPage/Men/luxury-men-collection-list/LuxuryMenCollectionList.component";
import LuxuryTopBrands from "../../components/LuxuryPage/luxury-top-brands/LuxuryTopBrands.component";
import { saveStoreState } from "../../redux/storeSelect/storeSelect.actions";

const Lifestyle = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { gender } = router.query;
  const luxuryState = useSelector((state) => state.storeSelectState);

  useEffect(() => {
    dispatch(
      saveStoreState({
        storeType: "luxury",
        department: gender,
      })
    );
  }, [dispatch, gender]);

  return (
    <main className="bg-luxury">
      <LuxuryHeader />
      <div
        className="bg-luxury"
        style={{ position: "absolute", top: "106%", width: "100vw" }}
      >
        <LuxuryMenCollection />
        {/* <LuxuryMenCollectionList /> */}
        <LuxuryRecommendation />
        <LuxuryTopBrands />
        <Footer />
      </div>
    </main>
  );
};

export default Lifestyle;
