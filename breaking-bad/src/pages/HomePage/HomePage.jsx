import "./HomePage.scss";

function HomePage() {
  return (
    <div className="main-img">
      <img className="background-img" loading="lazy" src={`${process.env.PUBLIC_URL}/breakingBad-background.webp`} alt="изображние фона" />
    </div>
  );
}

export default HomePage;
