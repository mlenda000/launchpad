const Logo = () => {
  return (
    <div className="logo-layout">
      <img
        src={process.env.PUBLIC_URL + "launchpad-logo.png"}
        alt="launchpad logo"
        width="150px"
        height="150px"
      />
      <h1 className="">Launchpad</h1>
    </div>
  );
};
export default Logo;
