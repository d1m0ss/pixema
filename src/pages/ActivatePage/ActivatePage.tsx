import { FC, useEffect, useState } from "react";
import "./ActivatePage.scss";
import { Forma } from "../../components/Forma/Forma";
import { useParams } from "react-router-dom";
import { postActivate } from "../../api/postActivate";

interface IActivatePage {}

export const ActivatePage: FC<IActivatePage> = () => {
  const { uid, token } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isActivate, setIsActivate] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false)
    if (uid && token) {
      postActivate({ uid, token })
        .then(() => setIsActivate(true))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  }, []);

  return (
    <>
      {isActivate && (
        <Forma name="Success" type="Reset password">
          <h4>Email Confirmed</h4>
          <h4>Your registration is now completed</h4>
        </Forma>
      )}
      {isLoading && <h2>Loading...</h2>}
      {isError && (
        <Forma
          name="Try Again"
          type="Reset password"
          handleSubmit={() => window.location.reload()}
        >
          <h2>Error</h2>
          <h3>Some Error</h3>
          <h4>Try Again</h4>
        </Forma>
      )}
    </>
  );
};
