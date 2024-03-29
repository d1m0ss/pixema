import { useNavigate, useParams } from "react-router-dom";
import { FC, useEffect, useState } from "react";

import { postActivate } from "../../api/auth/postActivate";
import { Forma } from "../../components/Forma/Forma";


export const ActivatePage: FC = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [isActivate, setIsActivate] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    if (uid && token) {
      postActivate({ uid, token })
        .then(() => setIsActivate(true))
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }
  }, [uid, token]);

  return (
    <>
      {isActivate && (
        <Forma
          name="Success"
          type="Reset password"
          handleSubmit={() => navigate("/authentication/sign-in")}
        >
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
