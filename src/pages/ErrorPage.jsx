import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="container">
      <h1>Page not found!</h1>
    </div>
  );
};

export default ErrorPage;
