import { Link } from "react-router-dom";
import notFound from "../assets/not-found.jpg";

export const PageNotFound = () => {
  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <p>404 Page Not Found</p>
          <img src={notFound} alt="not found icon" />
          <Link to="/">
            <button>Go Back To Word Counter</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
