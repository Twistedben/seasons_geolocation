import { useState, useEffect } from "react";

export default useLocation => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      error => setErrorMessage(error.message)
    );
  }, []);
  return [lat, errorMessage];
};
