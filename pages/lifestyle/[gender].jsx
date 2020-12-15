import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import LifestyleSection from "../../components/LifestylePage/lifestyle-section/LifestyleSection.component";
import LifestyleRecommendationBox from "../../components/LifestylePage/lifestyle-recommendations/LifestyleRecommendation.components";
import LifestyleExclusive from "../../components/LifestylePage/lifestyle-exclusive/LifestyleExclusive.component";
import LifestyleTrendingSection from "../../components/LifestylePage/lifestyle-trending-section/LifestyleTrendingSection.components";
import LifestylePromotionsSection from "../../components/LifestylePage/lifestyle-promotions-section/LifestylePromotionsSection.components";
import LifestyleSubscribeSection from "../../components/LifestylePage/lifestyle-subscribe-section/LifestyleSubscribeSection.components";
import LifestyleTopBrands from "../../components/LifestylePage/lifestyle-top-brands/LifestyleTopBrands.component";
import LifestyleInstagramSection from "../../components/LifestylePage/lifestyle-instagram-section/LifestyleInstagramSection.components";

// Women components
import LifestyleWomenHeader from "../../components/LifestylePage/Women/lifestyle-women-header/LifestyleWomenHeader.component";
import LifestyleWomenDealSection from "../../components/LifestylePage/Women/lifestyle-women-deal-section/LifestyleWomenDealSection.components";
import LifestyleWomenUpsellSection from "../../components/LifestylePage/Women/lifestyle-women-upsell-section/LifestyleWomenUpsellSection.components";
// Men components
import LifestyleMenHeader from "../../components/LifestylePage/Men/lifestyle-men-header/LifestylemenHeader.component";
import LifestyleMenDealSection from "../../components/LifestylePage/Men/lifestyle-men-deal-section/LifestylemenDealSection.components";
import LifestyleMenUpsellSection from "../../components/LifestylePage/Men/lifestyle-men-upsell-section/LifestylemenUpsellSection.components";

import { getProfile } from "../../redux/profile/profile.actions";
import { saveLifestyleState } from "../../redux/lifestyle/lifestyle.actions";

const Lifestyle = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  var header, dealSection, upsellSection;
  const profileGet = useSelector((state) => state.profileGet);
  const lifestyleState = useSelector((state) => state.lifestyleState);
  const { storeType, department } = lifestyleState; // will be used somewhere else
  const { profile } = profileGet;

  const { gender } = router.query;

  useEffect(() => {
    if (!profile) {
      dispatch(getProfile());
    }
    dispatch(
      saveLifestyleState({
        storeType: "lifestyle",
        department: gender,
      })
    );
  }, [dispatch, gender]);

  if (gender == "women") {
    header = <LifestyleWomenHeader />;
    dealSection = <LifestyleWomenDealSection />;
    upsellSection = <LifestyleWomenUpsellSection />;
  } else if (gender == "men") {
    header = <LifestyleMenHeader />;
    dealSection = <LifestyleMenDealSection />;
    upsellSection = <LifestyleMenUpsellSection />;
  }

  return (
    <main>
      {header}
      {upsellSection}
      {dealSection}
      <LifestyleSection />
      <LifestyleTrendingSection />
      <LifestyleExclusive />
      <LifestyleRecommendationBox />
      <LifestyleTopBrands />
      <LifestyleSubscribeSection />
      <LifestylePromotionsSection />
      <LifestyleInstagramSection />
    </main>
  );
};

export default Lifestyle;
