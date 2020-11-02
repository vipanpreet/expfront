const Productadditional = () => {
  return (
    <div className="pothers mt-6">
      <div className="pothers__menu">
        <li className="pothers__menu--item pothers__menu--desc active">
          Description
        </li>
        <li className="pothers__menu--item pothers__menu--add">
          Additional Details
        </li>
        <li className="pothers__menu--item pothers__menu--rev">Reviews</li>
      </div>
      <div className="pothers__body">
        {/* <!-- ------- PANEL 1 DESCRIPTION --------- --> */}
        <div className="pothers__body--item pothers__body--desc display-block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id aut
          dicta dolorem beatae provident molestias perferendis. Molestiae harum
          voluptatibus quas, exercitationem, amet delectus quam nihil atque iste
          tempora illo? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Unde id aut dicta dolorem beatae provident molestias perferendis.{" "}
          <br />
          <br />
          Molestiae harum voluptatibus quas, exercitationem, amet delectus quam
          nihil atque iste tempora illo? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde id aut dicta dolorem beatae provident molestias
          perferendis. Molestiae harum voluptatibus quas, exercitationem, amet
          delectus quam nihil atque iste tempora illo?
        </div>
        {/* <!-- ------- PANEL 2 ADDITIONAL --------- --> */}
        <div className="pothers__body--item pothers__body--add">
          Molestiae harum voluptatibus quas, exercitationem, amet delectus quam
          nihil atque iste tempora illo?
        </div>

        {/* <!-- ------- PANEL 3 REVIEWS --------- --> */}
        <div className="pothers__body--item pothers__body--rev">
          <div className="row">
            <div className="col-lg-6">
              {/* <!-- Reviews --> */}
              <div className="preview">
                <div className="preview--heading">
                  3 Reviews for Cream Shirt with Sleeves
                </div>
                {/* <!-- Review 1 --> */}
                <div className="preview-item">
                  <div className="preview-item__img">
                    <div>
                      <img src="/assets/users/demo.jpg" alt="" />
                    </div>
                  </div>
                  <div className="preview-item__body">
                    <div className="preview-item__body--stars">
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-full.svg" />
                    </div>
                    <div className="preview-item__body--username">
                      <span>John Doe</span> <span>- 11 January 2020</span>
                    </div>
                    <div className="para">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum sunt est, voluptas accusantium aliquam officia ab
                      a quas.
                    </div>
                  </div>
                </div>

                {/* <!-- Review 2 --> */}
                <div className="preview-item">
                  <div className="preview-item__img">
                    <div>
                      <img src="/assets/users/demo.jpg" alt="" />
                    </div>
                  </div>
                  <div className="preview-item__body">
                    <div className="preview-item__body--stars">
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-half.svg" />
                    </div>
                    <div className="preview-item__body--username">
                      <span>John Doe</span> <span>- 11 January 2020</span>
                    </div>
                    <div className="para">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolorum sunt est, voluptas accusantium aliquam officia ab
                      a quas ratione praesentium harum error, pariatur
                      cupiditate architecto impedit vitae? Reiciendis, maiores
                      laboriosam?
                    </div>
                  </div>
                </div>

                {/* <!-- Review 3 --> */}
                <div className="preview-item">
                  <div className="preview-item__img">
                    <div>
                      <img src="/assets/users/demo.jpg" alt="" />
                    </div>
                  </div>
                  <div className="preview-item__body">
                    <div className="preview-item__body--stars">
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-full.svg" />
                      <embed src="assets/static/icon-star-half.svg" />
                      <embed src="assets/static/icon-star-outline.svg" />
                    </div>
                    <div className="preview-item__body--username">
                      <span>John Doe</span> <span>- 11 January 2020</span>
                    </div>
                    <div className="para">
                      Lrum error, pclassNameariatur cupiditate architecto
                      impedit vitae.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-cream-light p-3 mt-3">
                <div className="title __600">Add a Review</div>
                <div className="subheading mt-3">Your Rating</div>
                <select name="" className="select" id="">
                  <option value="">1 star</option>
                  <option value="">2 stars</option>
                  <option value="">3 stars</option>
                  <option value="">4 stars</option>
                  <option value="">5 stars</option>
                </select>
                <div className="subheading mt-3">Your Review</div>
                <textarea rows="5" className="input bg-white"></textarea>
                <div className="mt-3">
                  <a className="btn btn--primary" href="#">
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productadditional;
