import Linkcard from "./Linkcard";

const LinkList = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="catt-title">
            <h3>
              Some <span className="txt-success">Projects</span> {"I've"}
              Build On
            </h3>
            <div className="text-right">
              <a className="rn-btn btn-brd mr--30">
                <span>Professional </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
        <Linkcard />
        <Linkcard />
        <Linkcard />
        <Linkcard />
      </div>
    </>
  );
};

export default LinkList;
