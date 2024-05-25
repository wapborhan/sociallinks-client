import { FaGithub, FaHackerrank } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import LinkHead from "../../../components/LinkHead";

const CodingForm = ({ register, singleUser }) => {
  return (
    <>
      <LinkHead cattTitle={"Coding"} />
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-name">Github</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaGithub />
            </div>
            <input
              className="form-control form-control-lg"
              name="github"
              type="text"
              // defaultValue={singleUser && singleUser?.links?.github}
              placeholder="Username"
              {...register("github")}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-phone">Hacker Rank</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaHackerrank />
            </div>
            <input
              className="form-control form-control-lg"
              name="hackerRank"
              type="text"
              // defaultValue={singleUser && singleUser?.links?.hackerRank}
              placeholder="Username"
              {...register("hackerRank")}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-phone">Code Forces</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <SiCodeforces />
            </div>
            <input
              className="form-control form-control-lg"
              name="codeForces"
              id="contact-name"
              type="text"
              defaultValue={singleUser && singleUser?.links?.codeForces}
              placeholder="Username"
              {...register("codeForces")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CodingForm;
