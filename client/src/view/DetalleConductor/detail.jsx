import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../redux/actions/actions";
import "./detail.css";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const driverDetail = useSelector((state) => state.driverDetail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className="detail-card">
      <h1>ID: {driverDetail.id}</h1>
      <h2>{driverDetail.name}</h2>
      <h2>{driverDetail.last_name}</h2>
      <img
        src={driverDetail.img}
        alt={driverDetail.name || driverDetail.last_name}
        className="detail-img"
      />
      <p>Fecha de Nacimiento: {driverDetail.date_of_birth}</p>
      <p>Nacionalidad: {driverDetail.nationality}</p>
      <p>Teams: {driverDetail.teams}</p>
      <p>Description: {driverDetail.description}</p>
    </div>
  );
};

export default Detail;
