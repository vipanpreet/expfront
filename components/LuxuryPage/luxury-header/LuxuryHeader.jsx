const LuxuryHeader = () => {
  return (
    <div class="wrapperv">
      <div class="gradient"></div>
      <video loop autoPlay>
        <source src="/assets/luxury/luxurybg.mp4" type="video/mp4" />
        <source src="/assets/luxury/luxurybg.mp4" type="video/ogg" />
      </video>
      <div className="vcontainer text-center">
        <h1>Feel the luxury</h1>
        <h2>collections</h2>
      </div>
    </div>
  );
};

export default LuxuryHeader;
