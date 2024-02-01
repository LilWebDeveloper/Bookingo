import { json } from "react-router-dom";
import { getAuthToken } from "../../utils/Token";

export default async function ReservationLoader() {
  const token = getAuthToken();

  const response = await fetch(
    `http://localhost:5050/reservation/userReservation`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  if (!response.ok) {
    return json({ message: "Could not fetch reservation.", status: 500 });
  } else {
    const resData: ReservationsType = await response.json();
    return resData.reservation;
  }
}