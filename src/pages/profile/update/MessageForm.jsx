import { FaDiscord, FaSquareWhatsapp, FaTelegram } from "react-icons/fa6";
import LinkHead from "../../../components/LinkHead";

const MessageForm = ({ register, singleUser }) => {
  return (
    <>
      <LinkHead cattTitle={"Coding"} />
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-name">Whatsapp</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaSquareWhatsapp />
            </div>
            <input
              className="form-control form-control-lg"
              name="whatsapp"
              type="text"
              defaultValue={singleUser && singleUser?.links?.whatsapp}
              placeholder="Username"
              {...register("whatsapp")}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-phone">Telegram</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaTelegram />
            </div>
            <input
              className="form-control form-control-lg"
              name="telegram"
              type="text"
              placeholder="Username"
              defaultValue={singleUser && singleUser?.links?.telegram}
              {...register("telegram")}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="form-group">
          <label htmlFor="contact-phone">Discord</label>
          <div className="d-flex labels">
            <div className="ico-btn p-2">
              <FaDiscord />
            </div>
            <input
              className="form-control form-control-lg"
              name="discord"
              type="text"
              placeholder="Username"
              defaultValue={singleUser && singleUser?.links?.discord}
              {...register("discord")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageForm;
