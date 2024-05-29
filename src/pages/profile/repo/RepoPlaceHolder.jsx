import PlaceHolderCard from "../../components/PlaceHolderCard";

const RepoPlaceHolder = () => {
  return (
    <div
      // key={repo.id}
      className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 mb-3"
    >
      <PlaceHolderCard />
      <PlaceHolderCard />
      <PlaceHolderCard />
    </div>
  );
};

export default RepoPlaceHolder;
