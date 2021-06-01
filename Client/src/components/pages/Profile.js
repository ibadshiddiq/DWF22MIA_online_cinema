import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useContext } from "react";

import { API } from "../config/api";
import dateConvert from "../dateConvert";
import { UserContext } from "../context/userContext";

import Default from "../pictures/default.png";
import ServerError from "../pictures/500 Internal Server Error.gif";
import Loading from "../pictures/Process.gif";

function Profile() {
  const [state] = useContext(UserContext);

  const { id } = useParams();
  let { isLoading, error, data } = useQuery("user", async () => {
    const response = await API.get("/userss/" + id);
    return response.data.data.users;
  });

  let { data: transactions } = useQuery("transactionprofile", async () => {
    const response = await API.get("/transactions");
    return response.data.data;
  });

  return (
    <>
      <div className="notfound">
        {isLoading && <img src={Loading} alt="Loading" />}
        {error && (
          <>
            <img src={ServerError} alt="server error. can't fetch data" />
          </>
        )}
      </div>

      {data && transactions && (
        <div className="container-profile">
          <div className="profile">
            <h1>My Profile</h1>
            <div className="profile-detail">
              <div className="profile-img">
                <img
                  src={
                    data.avatar
                      ? `http://localhost:5000/uploads/${data.avatar}`
                      : Default
                  }
                  alt="#"
                />
              </div>
              <div className="profile-content">
                <h6>Full Name</h6>
                <p>{data.fullName}</p>
                <h6>Email</h6>
                <p>{data.email}</p>
                <h6>Phone</h6>
                <p>{data.phone}</p>
              </div>
            </div>
            <Link to={`/updateprofile/${data.id}`}>
              <button className="card1-btn">Edit Profile</button>
            </Link>
          </div>
          <div className="transactions">
            <h1>History Donation</h1>
            <div className="list-donation">
              {transactions.map((content) =>
                content.userid === state?.user?.id ? (
                  <div className="donation" key={content.id}>
                    <div className="donation-body">
                      <h3>{content.title}</h3>
                      <p>{content.orderDate}</p>
                    </div>
                    <div className="donation-footer">
                      {/* <p>Total : Rp {convert(content.donateAmount)}</p> */}
                      {content.status === "success" ? (
                        <p className="condition">{content.status}</p>
                      ) : (
                        <p className="pending">{content.status}</p>
                      )}
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
